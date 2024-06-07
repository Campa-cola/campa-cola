import React from 'react'

export enum TYPE{
    FULL,
    CONTAIN
}

interface SectionProp{
    type:TYPE
    sectionStyle:string,
    children:React.ReactNode
}

function Section(props:SectionProp) {
  return (
    <section className={`${props.type===TYPE.FULL?'w-full':'max-w-[1080px]'} ${props.sectionStyle} m-auto `}>
        {props.children}
    </section>
  )
}

export default Section