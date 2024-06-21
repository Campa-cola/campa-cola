import Section, { TYPE } from '@/conponents/section/Section'
import React from 'react'

function page() {
    return (
        <div>
            <div className='bgImage p-20'>
                <div className=" h-max" >
                    <div className="   text-center">
                        <h1 className="font-serif text-white  font-bold lg:text-[7rem] text-4xl underline underline-offset-3 ">PRIVACY POLICY</h1>
                    </div>
                </div>
            </div>
            <Section type={TYPE.CONTAIN} sectionStyle={'py-5 px-6 lg:px-0'} >
                <div className=''>
                    <h1 className='font-serif text-xl'>
                        Welcome to Campa Cola. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to protect it.
                    </h1>

                    <div className='my-10'>

                        <div className='my-5'>
                            <h1 className='font-serif font-bold'>
                                Information We Collect
                            </h1>
                            <div className=''>
                                <ul>
                                    <li className='my-2'>
                                        <span className='font-semibold'>- Personal Information:</span>We may collect personal information such as your name, email address, phone number, and mailing address when you create an account, place an order, or subscribe to our newsletter.

                                    </li>
                                    <li className='my-2'>
                                        <span className='font-semibold'>- Payment Information:</span>For processing payments, we collect your payment details including credit card numbers and billing addresses.

                                    </li>
                                    <li className='my-2'>
                                        <span className='font-semibold'>- Usage Data:</span>We collect information about your interactions with our website, including your IP address, browser type, pages visited, and time spent on our site.

                                    </li>
                                    <li className='my-2'>
                                        <span className='font-semibold'>- Cookies and Tracking Technologies:</span>We use cookies and similar technologies to enhance your browsing experience and gather information about how our site is used.

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='my-5'>
                            <h1 className='font-serif font-bold'>
                                How We Use Your Information
                            </h1>
                            <div className=''>
                                <ul>
                                    <li className='my-2'>
                                        <span className='font-semibold'>- To Provide Services:</span>We use your personal information to process your orders, manage your account, and deliver our products and services.
                                    </li>
                                    <li className='my-2'>
                                        <span className='font-semibold'>- To Improve Our Website:</span>Usage data helps us understand how our site is used and how we can improve its functionality and content.

                                    </li>
                                    <li className='my-2'>
                                        <span className='font-semibold'>- Marketing and Promotions:</span>With your consent, we may send you promotional emails about our products, services, and special offers. You can opt out of these communications at any time.

                                    </li>
                                    <li className='my-2'>
                                        <span className='font-semibold'>- Customer Support:</span>Your information helps us respond to your customer service requests and support needs more efficiently.

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='my-5'>
                            <h1 className='font-serif font-bold'>
                                Information Sharing and Disclosure
                            </h1>
                            <div className=''>
                                <ul>
                                    <li className='my-2'>
                                        <span className='font-semibold'>- Third-Party Service Providers:</span>We may share your information with third-party service providers who assist us with payment processing, shipping, and other operational functions.

                                    </li>
                                    <li className='my-2'>
                                        <span className='font-semibold'>- Legal Requirements:</span>We may disclose your information if required by law or in response to valid requests by public authorities.

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='my-5'>
                            <h1 className='font-serif font-bold'>
                                Data Security
                            </h1>
                            <div className=''>
                                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is entirely secure, and we cannot guarantee absolute security.

                            </div>
                        </div>
                        <div className='my-5'>
                            <h1 className='font-serif font-bold'>
                                Your Rights
                            </h1>
                            <div className=''>
                                You have the right to access, correct, or delete your personal information. You can also object to the processing of your data or request that we restrict its processing. To exercise these rights, please contact us at [insert contact information].

                            </div>
                        </div>
                        <div className='my-5'>
                            <h1 className='font-serif font-bold'>
                                Changes to This Privacy Policy
                            </h1>
                            <div className=''>
                                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.

                            </div>
                        </div>
                        <div className='my-5'>
                            <h1 className='font-serif font-bold'>
                                Contact Us
                            </h1>
                            <div className=''>
                                If you have any questions or concerns about this Privacy Policy, please contact us at:
                                <div className='mt-2 font-semibold'>

                                Campa Cola<br/>
                                Email: business@campa-colaa.com<br/>
                                Phone: 18008338566
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default page