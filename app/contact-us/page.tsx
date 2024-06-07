import FormCard from '@/conponents/form/FormCard'
import Section, { TYPE } from '@/conponents/section/Section'

function page() {


  return (
     <div className='bgImage'>
      <Section type={TYPE.CONTAIN} sectionStyle={'py-8 '} >
          <FormCard />
        </Section>
     </div>
        
    
  )
}

export default page
