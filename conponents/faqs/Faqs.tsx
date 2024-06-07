"use client"
import React from 'react'

import { Accordion,AccordionItem } from '@szhsin/react-accordion'
interface FaqsProps{
    data: {
        ques: string;
        ans: string;
    }[]
}
function Faqs(props:FaqsProps) {
    return (
        <Accordion className='text-2xl m-auto p-6 divide-y divide-slate-200'>

            {
                props.data.map((res,index,arr)=>{
                    return  <AccordionItem className={`${index===0?``:`underline underline-offset-2`} ${index===arr.length-1?``:``}`} key={index} header={res.ques+""}>
                    <h1 className='text-lg'>{res.ans}</h1>
                  </AccordionItem>
                })
            }
      </Accordion>
    )
}

export default Faqs