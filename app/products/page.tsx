import Img from '@/conponents/image/Image'
import Link from 'next/link'
import bannerImage from '@/utils/assests/campaflavors.jpg'
import FormCard from '@/conponents/form/FormCard'
import ProductCard, { DIRECTION } from '@/conponents/productCard/ProductCard'
import Section, { TYPE } from '@/conponents/section/Section'
import Testimonial from '@/conponents/testimonial/Testimonial'
import homeData from '@/utils/JSON/homedata.json'
import productData from '@/utils/JSON/productData.json'
import drink2 from '@/utils/assests/img2.jpg'
import promoImage from '@/utils/assests/promoBanner.jpg'


function page() {
    return (
        <>
            <div className=" h-max m-auto bannerBgImage" >
                {/* <Img imgStyle={"w-full h-96"} image={drink2} alt={""} /> */}
                <div className=" flex justify-end  h-full py-8">
                    <Section type={TYPE.CONTAIN} sectionStyle=" text-center px-2 flex justify-evenly flex-col">
                        <h1 className="  font-semibold text-[5rem] font-serif text-[red]">Campa cola</h1>
                        <h1 className="  text-green-500 font-bold text-2xl">Year of Experience</h1>
                        <h1 className="text-white font-serif font-bold text-4xl">Flavour Frenzy Ahead</h1>
                        <p className="text-white font-serif text-sm font-bold  mt-4">Taste the Variety and Explore range of delicious Campa flavours</p>
                    </Section>

                </div>

            </div>

            <Section type={TYPE.CONTAIN} sectionStyle='px-6'>
                <div>
                    <section id='top'>
                        <ProductCard data={productData.coldDrink} title={'Top prorducts'} titleStyle={''} cardDirection={DIRECTION.SCROLL} />
                    </section >

                    {/* banner */}
                    <div className=" h-max px-4 lg:px-0 m-auto bannerBgImage" >
                        {/* <Img imgStyle={"w-full h-96"} image={drink2} alt={""} /> */}
                        <div className=" flex justify-end  h-full py-8">
                            <Section type={TYPE.CONTAIN} sectionStyle="flex justify-evenly flex-col">
                                <h1 className="  font-semibold text-[5rem] font-serif text-[red]">25+</h1>
                                <h1 className="  text-green-500 font-bold text-2xl">Year of Experience</h1>
                                <h1 className="text-white font-serif font-bold text-4xl">Flavour Frenzy Ahead</h1>
                                <p className="text-white font-serif text-sm font-bold  mt-4">Taste the Variety and Explore range of delicious Campa flavours</p>
                                <Link className="  bg-[#4681f4] hover:bg-blue-900 text-white w-max px-8 py-4 font-semibold text-xl rounded-lg mt-4 shadow-lg w-" href={"#form"}  >Get Distributorship</Link>
                            </Section>

                        </div>

                    </div>
                    <section id='energy'>
                        <ProductCard data={productData.coldDrink} title={'ENERGY DRINKS'} titleStyle={''} cardDirection={DIRECTION.SCROLL} />

                    </section>
                    {/* banner */}
                    <div className="bgImage">
                        <Section type={TYPE.CONTAIN} sectionStyle="">
                            <div className='w-full h-96'>
                                <Img imgStyle={'w-full h-96'} image={promoImage} alt={''} />
                            </div>

                            {/* <div className="text-white font-bold flex gap-4 lg:gap-0 lg:flex-row flex-col justify-evenly py-16">
                                <div className="text-center">
                                    <h1 className="text-[3rem]">500234</h1>
                                    <h5 className="">Happy Clients</h5>
                                </div>
                                <div className="text-center">
                                    <h1 className="text-[3rem]">1234</h1>
                                    <h5 className="">Dealers</h5>
                                </div>
                                <div className="text-center">
                                    <h1 className="text-[3rem]">12034</h1>
                                    <h5 className="">Dedicated Staff</h5>
                                </div>
                                <div className="text-center">
                                    <h1 className="text-[3rem]">1234</h1>
                                    <h5 className="">Awards Achieved</h5>
                                </div>
                            </div> */}
                        </Section>
                    </div>
                    <section id='refreshing'>
                        <ProductCard data={productData.energyDrink} title={'refreshing prorducts'} titleStyle={''} cardDirection={DIRECTION.SCROLL} />

                    </section>
                </div>
            </Section>

            <div className="bgImage">
                <Section type={TYPE.CONTAIN} sectionStyle="">
                    <div className="text-white font-bold flex gap-4 lg:gap-0 lg:flex-row flex-col justify-evenly py-16">
                        <div className="text-center">
                            <h1 className="text-[3rem]">500k+</h1>
                            <h5 className="">Happy Clients</h5>
                        </div>
                        <div className="text-center">
                            <h1 className="text-[3rem]">1k+</h1>
                            <h5 className="">Dealers</h5>
                        </div>
                        <div className="text-center">
                            <h1 className="text-[3rem]">12k+</h1>
                            <h5 className="">Dedicated Staff</h5>
                        </div>
                        <div className="text-center">
                            <h1 className="text-[3rem]">1k+</h1>
                            <h5 className="">Awards Achieved</h5>
                        </div>
                    </div>
                </Section>
            </div>

            <Section type={TYPE.CONTAIN} sectionStyle="my-10 px-6">

                <Testimonial title='Reviews' review={homeData?.reviews} />
            </Section>
            <section id="form" className='bgImage'>
                <Section type={TYPE.CONTAIN} sectionStyle={'py-8 '} >
                    <FormCard />
                </Section>
            </section>
        </>
    )
}

export default page