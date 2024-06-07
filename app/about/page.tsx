
import Section, { TYPE } from '@/conponents/section/Section'

function page() {
    return (
        <div>

            <div className='bgImage p-20'>
                <div className=" h-max" >
                    <div className="   text-center">
                        <h1 className="font-serif text-white  font-bold lg:text-[7rem] text-4xl underline underline-offset-3 ">ABOUT US </h1>
                    </div>
                </div>
            </div>
            <Section type={TYPE.CONTAIN} sectionStyle={'mt-14'} >
                <div className="">
                    <div className="mb-8">
                        <div className="mb-8 p-8">
                            <h1 className="font-serif underline underline-offset-4 font-extrabold leading-5 lg:text-3xl text-lg mb-4 font">About Campa Cola</h1>
                            <p className="">
                                Campa Cola is a well-known soft drink brand in India renowned for its delicious and refreshing range
                                of beverages.
                                The brand has a long-standing history that goes back to the 1970s when it was first introduced to the
                                Indian market. Today, it has established itself as one of the most popular soft drink brands in the
                                country.
                            </p>
                        </div>
                    </div>
                    <div className="mb-8 p-8">
                        <h2 className="font-serif underline underline-offset-4 font-extrabold leading-5 lg:text-3xl text-lg mb-4 font">Philosophy</h2>
                        <p className="">At Campa Cola, the company's philosophy is centered around providing customers
                            with the best quality products. The brand believes that every customer deserves to enjoy a flavorful and
                            refreshing drink that satisfies their thirst and revitalizes them. The brand's mission is to create
                            high-quality beverages using the best ingredients and advanced technology.</p>
                    </div>
                    <div className="mb-8 p-8">
                        <h2 className="font-serif  underline underline-offset-4 font-extrabold leading-5 lg:text-3xl text-lg mb-4 font">Products</h2>
                        <p className="">Campa Cola offers a diverse range of beverages that includes classNameic colas,
                            fruit juices, and energy drinks. The brand's products are made using carefully selected ingredients and
                            are available in various sizes to cater to different requirements. The brand's beverages come in
                            convenient packaging that makes it easy for customers to enjoy them while on-the-go.</p>
                    </div>
                    <div className="mb-8 p-8">
                        <h2 className="font-serif underline underline-offset-4 font-extrabold leading-5 lg:text-3xl text-lg mb-4 font">Quality Commitment</h2>
                        <p className="">Campa Cola takes great pride in its commitment to quality. The brand follows
                            stringent quality control measures at every stage of the production process to ensure that its products
                            meet the highest quality standards. The brand employs cutting-edge technology and equipment to
                            manufacture its beverages and conducts regular quality checks to maintain consistency in taste and
                            quality.</p>
                    </div>
                    <div className="p-8" >
                        <h2 className="font-serif underline underline-offset-4 font-extrabold leading-5 lg:text-3xl text-lg mb-4 font">Sustainability Efforts</h2>
                        <p className="">Campa Cola is a responsible company that is dedicated to sustainable practices
                            that promote environmental protection. The brand utilizes eco-friendly packaging materials and promotes
                            recycling to minimize its impact on the environment. The brand also supports local communities and
                            collaborates with local farmers to source the best quality ingredients for its beverages.</p>
                    </div>
                </div>
            </Section>

        </div>
    )
}

export default page