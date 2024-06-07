import React from 'react'
import Image from 'next/image'

interface ImgProp{
    imgStyle:string;
    containerStyle?:string
    image:string | any;
    alt:string;
    
}

function Img(props:ImgProp) {
  return (
    <div className={`${props?.containerStyle} `}>
      <Image
          className={`${props?.imgStyle}`}
          width={500}
          height={500}
          src={props.image}
          alt={props.alt}
          loading='lazy'
      />

    </div>
  )
}

export default Img