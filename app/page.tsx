import FormCard from "@/conponents/form/FormCard";
import Img from "@/conponents/image/Image";
import ProductCard, { DIRECTION } from "@/conponents/productCard/ProductCard";
import Section, { TYPE } from "@/conponents/section/Section";
import Testimonial from "@/conponents/testimonial/Testimonial";
import homeData from '@/utils/JSON/homedata.json';
import headerImg2 from '@/utils/assests/16.png';
import headerImg1 from '@/utils/assests/2.png';
import drink1 from '@/utils/assests/drink1.png';
import Link from "next/link";
import { FaCheck, FaUsers } from "react-icons/fa";
import { FaRegSquareFull } from "react-icons/fa6";

export default function Home() {
  return (
    <Section type={TYPE.FULL} sectionStyle={"bg-gray-50"}>

      {/* top-banner */}
      {/* <Section type={TYPE.FULL} sectionStyle="headerBgImage h-[90vh]">
        <Section type={TYPE.CONTAIN} sectionStyle="h-full">
       
        </Section>
      </Section> */}

      <div className="headerBgImage px-6 py-16 lg:px-12 h-max lg:h-[90vh] ">
      <div className=" h-full flex flex-col justify-center items-center lg:items-end ">
            <h1 className="  font-semibold text-center text-[6rem] font-serif text-[red]">Campa cola</h1>
            <h1 className="text-green-500 text-center font-serif font-bold text-5xl">Flavour Frenzy Ahead</h1>
            <p className="text-white  font-sans text-center text-sm font-bold lg:text-lg mt-2">Taste the Variety and Explore range of delicious Campa flavours</p>
            <p className="text-white max-w-[600px] lg:text-xl mt-4 lg:text-right text-center font-serif text-sm font-bold  ">Welcome to Campa Cola - India's Favorite Soft Drink.
            Choose from a wide variety of Campa flavors - something sweet, tangy, or refreshing for everyone.</p>
            <div className="mt-10">
                <Link className="  bg-[#4681f4] hover:bg-blue-900  text-white w-max px-8 py-4 font-semibold text-xl rounded-lg  shadow-lg " href={"#form"}  >Get Distributorship</Link>
              </div>
          </div>
      </div>
      {/* reasons */}
      <div className="bg-white px-6 py-20">
        <Section type={TYPE.CONTAIN} sectionStyle={""} >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="">
              <h4 className="text-2xl mb-4 font-serif text-[red] font font-semibold">Why Choosing Us!</h4>
              <h4 className="text-4xl font-serif lg:text-[2.5rem] mb-4 text-green-500">Few Reasons Why People Choosing Us!</h4>
              <p className="text-sm font-serif mb-4">Campa Cola invests heavily in its obligation to quality. The brand follows rigid quality control measures at each phase of the creation interaction to guarantee that its items fulfill the greatest guidelines. The brand utilizes state of the art innovation and gear to fabricate its drinks and leads customary quality checks to keep up with consistency in taste and quality.</p>
              <div className="mt-10">
                <Link className="  bg-[#4681f4] hover:bg-blue-900  text-white w-max px-8 py-4 font-semibold text-xl rounded-lg  shadow-lg " href={"#form"}  >Get Distributorship</Link>
              </div>

            </div>
            <div className=" flex flex-col justify-center mt-12 items-center gap-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-slate-100 h-[10rem] w-[10rem] flex justify-center items-center flex-col shadow-lg text-[red]">
                  <div className="text-6xl p-4 bg-white w-max text-center rounded-full">
                    <FaCheck />
                  </div>
                  <h1>100% Satisfaction</h1>
                </div>
                <div className="bg-slate-100 h-[10rem] w-[10rem] flex justify-center items-center flex-col shadow-lg text-[red]">
                  <div className="text-6xl p-4 bg-white w-max text-center rounded-full">
                    <FaUsers />
                  </div>
                  <h1>Dedicated Team</h1>
                </div>
              </div>
              <div className="bg-slate-100 h-[10rem] w-[10rem] flex justify-center items-center flex-col shadow-lg text-[red]">
                <div className="text-6xl p-4 bg-white w-max text-center rounded-full">
                  <FaRegSquareFull />
                </div>
                <h1>Modern Equipment</h1>
              </div>
            </div>
          </div>
        </Section>

      </div>
      {/* happy client */}
      <div className="bgImage">
        <Section type={TYPE.CONTAIN} sectionStyle="">
          <div className="text-white font-bold flex gap-4 lg:gap-0 lg:flex-row flex-col justify-evenly py-16">
            <div className="text-center">
              <h1 className="text-[3rem]">500234+</h1>
              <h5 className="">Happy Clients</h5>
            </div>
            <div className="text-center">
              <h1 className="text-[3rem]">1234+</h1>
              <h5 className="">Dealers</h5>
            </div>
            <div className="text-center">
              <h1 className="text-[3rem]">12034+</h1>
              <h5 className="">Dedicated Staff</h5>
            </div>
            <div className="text-center">
              <h1 className="text-[3rem]">1234+</h1>
              <h5 className="">Awards Achieved</h5>
            </div>
          </div>
        </Section>
      </div>

      {/* our Products */}
      <Section type={TYPE.CONTAIN} sectionStyle={"pt-6 px-6 mb-12"}>
        <ProductCard data={homeData.products} title={'Top prorducts'} titleStyle={''} cardDirection={DIRECTION.SCROLL} />

      </Section>


      {/* mid-banner */}
      <div className=" h-max m-auto bannerBgImage" >
        <div className=" px-6 lg:px-0 flex justify-end  h-full py-8">
          <Section type={TYPE.CONTAIN} sectionStyle="flex justify-evenly flex-col">
            <h1 className="  font-semibold text-[5rem] font-serif text-[red]">25+</h1>
            <h1 className="  text-green-500 font-bold text-2xl">Year of Experience</h1>
            <h1 className="text-white font-serif font-bold text-4xl">Flavor Frenzy Ahead</h1>
            <p className="text-white font-serif text-sm font-bold  mt-4">Taste the Variety and Explore range of delicious Campa flavorsu</p>
            <Link className="  bg-[#4681f4] hover:bg-blue-900 text-white w-max px-8 py-4 font-semibold text-xl rounded-lg mt-4 shadow-lg w-" href={"#form"}  >Get Distributorship</Link>
          </Section>

        </div>

      </div>


      {/* Faqs */}
      <Section type={TYPE.CONTAIN} sectionStyle={"my-16 px-6"}>

        <Testimonial title='Reviews' review={homeData?.reviews} />

      </Section>


      {/* reviews */}
      <section id="form" className="bgImage">
        <Section type={TYPE.CONTAIN} sectionStyle={'py-12 '} >
          <FormCard />
        </Section>
      </section>



    </Section>
  );
}
