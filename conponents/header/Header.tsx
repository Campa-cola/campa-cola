"use client"

import React, { useEffect, useState } from 'react'
import Img from '../image/Image'
import imag1 from "@/utils/assests/Campalogo.png"
import Nav from '../nav/Nav'
import Section, { TYPE } from '../section/Section'
import Link from 'next/link'

function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  
  return (
    <Section type={TYPE.FULL} sectionStyle={'z-50 fixed top-0 eft-0 bg-white h-max lg:h-16 '} >
      <Section type={TYPE.CONTAIN} sectionStyle={'px-2 lg:flex lg:!max-w-[1280px] justify-between items-center lg:items-end bg-red'}>
        <div className='flex justify-between  items-center  p-2'>
          <Img image={imag1} imgStyle={'h-12 lg:w-36  w-20 '} alt={'campa-cola'} />
          <div className='flex items-center gap-2 transition-all duration-500  lg:hidden'>
            <Link className="  bg-[#f44646] hover:bg-blue-900 text-white w-max px-4 py-2 lg:px-8 lg:py-4 font-semibold text-sm rounded-lg  " href={"#form"}  >CONTACT US</Link>
            <div className=' mx-2 ' onClick={() => {
              if (showMenu === false) {
                setShowMenu(true)
              } else {
                setShowMenu(false)
              }
            }}>
              <svg className="w-5 h-5 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </div>
          </div>
        </div>

        <div className='block lg:hidden'>
          <div className={`${showMenu === false ? 'hidden lg:bloxk' : 'block lg:hidden'}`}>
            <div className='block p-2 mr-8'>
              <Nav setshowMenu={setShowMenu} />
            </div>
          </div>



        </div>

        <div className='hidden lg:block p-2 mr-8'>
          <Nav />
        </div>

      </Section>
    </Section>
  )
}

export default Header