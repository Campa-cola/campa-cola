"use client"
import React, { useEffect, useState } from 'react'

function FormCard() {
    const formList = [
        {   
            name:'name',
            lable: "Enter Your Name",
            placeholder: "Your Name...",
            alt: []
        },
        {   
            name:'email',
            lable: "Enter Your Email",
            placeholder: "Your Email...",
            alt: []
        },
        {   
            name:'apply',
            lable: "Apply For",
            placeholder: "",
            alt: ["Apply for", "Dealership", "Superstockist"],

        },
        {   
            name:'number',
            lable: "Enter Your Phone Number",
            placeholder: "Your Number",
            alt: []
        },
        {   
            name:'pincode',
            lable: "Enter Your Pincode",
            placeholder: "Your Pincode",
            alt: []
        },
        {   
            name:'city',
            lable: "Enter Your City",
            placeholder: "Your City",
            alt: []
        },
        {   
            name:'state',
            lable: "Enter Your State",
            placeholder: "Your State",
            alt: []
        },
        {   
            name:'investment',
            lable: "Select Investment",
            placeholder: "",
            alt: ["Select Investment", "0L to 5L", "5L to 10L", "10L-15L", "15L-20L"],
        },
    ]

    const [inputs, setInputs] = useState({});

    const handleChange = (event:any) => {
        console.log(event?.target.name);
        
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

      const handleSubmit = async(event:any) => {
        event.preventDefault();
       try {
        const response =await fetch('/api/campa-cola',{method:"POST",
            headers:{
                "Context-type":"application/json"
            },
            body:JSON.stringify(inputs)
        })

        if(!response.ok){
            throw new Error("Not Ok")
        }else{
            alert("Applied Successfully")
        }
       } catch (error) {
        
       }
      }


      useEffect(()=>{
        console.log(inputs,"in");
        
      },[inputs])

    return (
        <div className='mt-6 lg:mt-8'>
            <form className='px-12 py-6 bg-white w-max m-auto rounded-lg shadow-xl  ' onSubmit={handleSubmit}>
                <h1 className='text-center text-3xl'>Apply For <h5 className='text-lg mt-2'>Superstockist/Distributorship</h5></h1>
                <div className='mt-4 lg:grid grid-cols-2 gap-x-11 gap-y-2'>
                    {formList.map((res, index) => {
                        return (
                            <div className='' key={index}>
                                <h1 className='text-sm lg:mb-2 mt-4'>{res.lable}<span className='text-[#ff3535]' > *</span></h1>
                                <div>
                                    {res.placeholder.length > 0 && (
                                        <input name={res.name} className='w-full h-7 border rounded  focus:outline-none focus:ring focus:ring-violet-300 bg-gray-100 p-2 text-sm' type="text" placeholder={res.placeholder} onChange={handleChange} required/>
                                    )}
                                    {
                                        res.alt.length > 0 && (
                                            <>
                                                <select onChange={handleChange} name={res.name}  className='text-sm h-7 border rounded px-2 focus:outline-none focus:ring focus:ring-violet-300 bg-gray-100 w-full' id="">
                                                    {res.alt.map((res, index) => {
                                                        return (
                                                            <option  className='bg-gray-50  p-7 text-sm' key={index} value={res}>{res}
                                                            </option>
                                                        )
                                                    })}
                                                </select>
                                            </>

                                        )
                                    }

                                </div>
                            </div>
                        )
                    })}
                </div>
                <input className='bg-[#4681f4] hover:bg-blue-900 text-white text-sm py-2 px-5 rounded-md mt-8' type="submit" />
            </form>

        </div>
    )
}

export default FormCard