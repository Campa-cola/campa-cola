import React from 'react'
import Img from '../image/Image'
import Section, { TYPE } from '../section/Section'
import drink1 from '@/utils/assests/img2.jpg'
import drink2 from '@/utils/assests/11.png'
import { Underline } from '@/utils/helper/Underline'


export enum DIRECTION {
  SCROLL,
  GRID
}

interface ProductCardProps {
  data: {
    name: string;
    des: string;
    img: string;
  }[]
  title: string
  titleStyle: string;
  cardDirection: DIRECTION
}

function ProductCard(props: ProductCardProps) {
  return (
    <div>
      <div className="bg-gray-50 py-8" >
        <Section type={TYPE.CONTAIN} sectionStyle={"pt-6 my-2"}>
          <div>

          <h1 className="text-3xl font-semibold flex justify-center flex-col items-center   mb-8">
              <h1 className='text-center'>{props?.title.toUpperCase()}</h1>
              <div className="w-48 -mt-1"><Underline /></div>
            </h1>
            <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10`}>
              {props.data && props.data.map((res, index) => {
                return <div key={index} className="shadow-black-200 rounded-lg shadow-2xl bg-[#a390e2]">
                  <Img imgStyle={"rounded-t-lg"} image={res?.img} alt={""} />
                  <div className="p-2 text-center">
                    <h1 className="text-white font-serif">{res?.name.toUpperCase()}</h1>
                  </div>

                </div>
              })}
            </div>
          </div>

        </Section>
      </div>
    </div>
  )
}

export default ProductCard