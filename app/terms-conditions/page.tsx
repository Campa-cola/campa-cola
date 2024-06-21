import Section, { TYPE } from '@/conponents/section/Section'
import React from 'react'

function page() {
  return (
    <div>
      <div className='bgImage p-20'>
        <div className=" h-max" >
          <div className="   text-center">
            <h1 className="font-serif text-white  font-bold lg:text-[5rem] text-4xl underline underline-offset-3 ">TERMS & CONDITIONS</h1>
          </div>
        </div>
      </div>
      <Section type={TYPE.CONTAIN} sectionStyle={'py-5 px-6 lg:px-0'} >
        <div className=''>
          <h1 className='font-serif text-xl'>
            These Terms & Conditions govern your use of the Campa Cola website and the purchase of our products. By accessing our website or placing an order, you agree to be bound by these terms.
          </h1>
          <div className='my-5'>
            <h1 className='font-serif font-bold'>
              Eligibility
            </h1>
            <div className=''>
              To use our website and make purchases, you must be at least 18 years old or have the consent of a parent or guardian. By using our site, you represent that you meet this requirement.

            </div>
          </div>
          <div className='my-5'>
            <h1 className='font-serif font-bold'>
              Account Registratio
            </h1>
            <div className=''>
              To access certain features of our website, you may be required to create an account. You agree to provide accurate and complete information during registration and to keep your account information up-to-date. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.

            </div>
          </div>
          <div className='my-5'>
            <h1 className='font-serif font-bold'>
              Orders and Payment
            </h1>
            <div className=''>
              <ul>
                <li className='my-2'>
                  <span className='font-semibold'>- Order Acceptance:</span>All orders placed through our website are subject to acceptance. We reserve the right to refuse or cancel any order for any reason.

                </li>
                <li className='my-2'>
                  <span className='font-semibold'>- Pricing:</span>All prices are listed in INR and are subject to change without notice. Taxes and shipping fees will be added to the total price at checkout.
                  .

                </li>
                <li className='my-2'>
                  <span className='font-semibold'>- Payment:</span> We accept Bank transfer, UPI, any Cards as well. By providing your payment information, you authorize us to charge the specified amount to your chosen payment method.


                </li>
              </ul>
            </div>
          </div>
          <div className='my-5'>
            <h1 className='font-serif font-bold'>
            Shipping and Delivery
            </h1>
            <div className=''>
              <ul>
                <li className='my-2'>
                  <span className='font-semibold'>- Shipping Policy:</span>We will process and ship your order within 3-5 business days. Delivery times may vary based on your location and the shipping method selected.
                </li>
                <li className='my-2'>
                  <span className='font-semibold'>- Delivery Issues:</span>If there are any issues with your delivery, please contact us immediately. We are not responsible for delays caused by carriers or unforeseen circumstances.
                </li>
              </ul>
            </div>
          </div>
          <div className='my-5'>
            <h1 className='font-serif font-bold'>
            Returns and Refunds
            </h1>
            <div className=''>
              <ul>
                <li className='my-2'>
                  <span className='font-semibold'>- Return Policy</span>If you are not satisfied with your purchase, you may return it within [number] days of receipt for a refund or exchange. Items must be returned in their original condition and packaging.


                </li>
                <li className='my-2'>
                  <span className='font-semibold'>- Refund Process:</span>If there are any issues with your delivery, please contact us immediately. We are not responsible for delays caused by carriers or unforeseen circumstances.


                </li>
              </ul>
            </div>
          </div>
          <div className='my-5'>
            <h1 className='font-serif font-bold'>
              Intellectual Property            </h1>
            <div className=''>
              All content on our website, including text, images, graphics, and logos, is the property of Campa Cola or its content suppliers and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our prior written consent.

            </div>
          </div>
          <div className='my-5'>
            <h1 className='font-serif font-bold'>
              Limitation of Liability
            </h1>
            <div className=''>
              To the fullest extent permitted by law, Campa Cola shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website or the purchase of our products.

            </div>
          </div>
          <div className='my-5'>
            <h1 className='font-serif font-bold'>
              Governing Law
            </h1>
            <div className=''>
              These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be resolved exclusively by the courts of Bengaluru.

            </div>
          </div>
          <div className='my-5'>
            <h1 className='font-serif font-bold'>
              Changes to These Terms
            </h1>
            <div className=''>
              We may update these Terms & Conditions from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of our website after any changes signifies your acceptance of the updated terms.

            </div>
          </div>
          <div className='my-5'>
            <h1 className='font-serif font-bold'>
              Contact Us
            </h1>
            <div className=''>

              If you have any questions or concerns about these Terms & Conditions, please contact us at:                                <div className='mt-2 font-semibold'>

                Campa Cola<br />
                Email: business@campa-colaa.com<br />
                Phone: 18008338566
              </div>
            </div>
          </div>
        </div>

      </Section>
    </div>
  )
}

export default page