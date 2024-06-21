
"use client"
import Link from 'next/link'
import React from 'react'

function Nav(props:any) {

  const navList = ["home", "products", "about", "contact-us","privacy-policy","terms-conditions"]

  return (
    <div className='flex flex-col lg:flex-row items-baseline gap-4 lg:gap-6 font-semibold text-sm'>
      {
        navList.map((res, index) => {
          return (<a onClick={()=>{

            if(props?.setshowMenu){
              props?.setshowMenu(false)
            }
          }}  key={index} className='group w-full lg:w-max active:text-sky-600 hover:text-sky-600 transition duration-300' href={`/${res==='home'?'':res}`}>
            {res.toUpperCase().split('-').join(' ')}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-sky-600"></span>
          </a>)
        })
      }
        <Link className=" hidden lg:block bg-[#f44646] hover:bg-blue-900 text-white w-max px-8 py-2 font-semibold text-sm rounded-lg  shadow-lg " href={"#form"}  >CONTACT US</Link>
    </div>
  )
}

export default Nav