import React from 'react'
import Section, { TYPE } from '../section/Section'
import Img from '../image/Image';
import drink from '@/utils/assests/img1.jpg'
import { Underline } from '@/utils/helper/Underline';

interface TestimonialProps{
    title:string;
    review: {
        name: string;
        email: string;
        review: string;
    }[]
}

function Testimonial(props:TestimonialProps) {
  return (
    <div>
        <Section type={TYPE.CONTAIN} sectionStyle="my-10">
        <h1 className="text-3xl font-semibold flex justify-center flex-col items-center   mb-4">
          <h1>{props?.title}</h1>
          <div className="w-20 -mt-1"><Underline /></div>
        </h1>
        <div className="flex gap-6 overflow-scroll  scrollbar-hide">
          {props.review.map((res, index) => {
            return <div key={index} className="w-64 rounded-xl bg-gray-300 p-4 ">
              <h1 className="text-sm  ">{res.review}</h1>
              <div className="flex mt-4 items-center gap-3  ">
                <div className="h-10 !min-w-10 rounded-full bg-slate-900">
                </div>
                <div className="flex flex-wrap">
                  <h1 className="text-base">{res.name}</h1>
                  <h1 className="text-sm  ">{res.email}</h1>
                </div>

              </div>

            </div>
          })}
        </div>
      </Section>
    </div>
  )
}

export default Testimonial