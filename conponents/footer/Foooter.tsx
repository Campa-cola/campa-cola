import footerData from "@/utils/JSON/footerData.json"
import phoneImg from "@/utils/assests/calling-icon.png"
import emailImg from "@/utils/assests/envelope-open-icon.png"
import Link from 'next/link'
import Img from '../image/Image'
import Section, { TYPE } from '../section/Section'
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Foooter() {
  return (
    <Section type={TYPE.FULL} sectionStyle={'bg-red-50 h-full  p-8'}>
      <Section type={TYPE.CONTAIN} sectionStyle='h-full'>
        <div className=' grid grid-cols-2 gap-4 lg:flex justify-evenly  my-3'>
          <div className=''>
            <h1 className='lg:text-xl text-base underline underline-offset-2 relative'>Campa    <span className=" absolute  top-0 text-xs">&#9415;</span>  </h1>
            <div className=' gap-3 mt-3'>
              {footerData.nav && footerData.nav.map((res, index) => {
                return <div key={index}>
                  - <Link className=' text-sm lg:text-base hover:text-sky-600 transition duration-300 ' href={res.link}>{res.title.toUpperCase()}</Link>
                </div>
              })}
            </div>
          </div>
          <div className=''>
            <h1 className='lg:text-xl text-base underline underline-offset-2'>Campa drinks</h1>
            <div className=' gap-3 mt-3'>
              {footerData.drinks && footerData.drinks.map((res, index) => {
                return <div key={index}>
                  - <Link className=' text-sm lg:text-base hover:text-sky-600 transition duration-300' href={res.link}>{res.title.toUpperCase()}</Link>
                </div>
              })}
            </div>
          </div>

        </div>

        <div className=" mt-10 text-3xl font-bold flex gap-4 justify-center">
          <a href={'https://www.facebook.com/officialcampacola/'} target="_black">
            <FaFacebook />
          </a>
          <a href={'https://twitter.com/savecampacola?lang=en'} target="_blank">
            <FaTwitter />
          </a>
          <a href={'https://www.instagram.com/officialcampa/'} target="_blank">
            <RiInstagramFill />
          </a>
          <a href={'https://www.youtube.com/channel/UCTbRAFMwKkFJ8MSnqn4m4eg'} target="_blank">
            <FaYoutube />
          </a>
        </div>

        <div className='mt-6 flex flex-col  justify-between text-center'>
          <Link href={'/contact-us'} className='text-center text-sm'>
            <h1 className='font-bold text-xl font-serif'>{footerData?.aboutus?.title}</h1>
            <h2 className='px-24 text-sm'>{footerData?.aboutus?.desc}</h2>
          </Link >
          <div className='mt-4 '>
            <h1 className='flex text-sm justify-center items-center gap-2'><Img imgStyle={'h-4 w-4'} image={phoneImg} alt={''} />contact-us : <a className="text-blue-600 underline underline-offset-2" href={`tel:${footerData?.contatus?.mobile}`}>{footerData?.contatus?.mobile}</a></h1>
            <h1 className='flex text-sm justify-center items-center gap-2'><Img imgStyle={'h-4 w-4'} image={emailImg} alt={''} />email : <a className="text-blue-600 underline underline-offset-2" href={`mailto:${footerData.contatus['company-email']}`}>{footerData.contatus['company-email']}</a></h1>

            <h1 className='mt-2 text-sm'>	&#x24B8;Copyright. All Rights Reserved</h1>
          </div>

        </div>
      </Section>

    </Section>
  )
}

export default Foooter