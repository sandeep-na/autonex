import BestSeller from '@/components/Best_Seller/BestSeller'
import DonutChart from '@/components/common/DonutChart'
import Footer from '@/components/common/Footer'
import Descount from '@/components/Home/Descount'
import Excellent from '@/components/Home/Excellent'
import Faq from '@/components/Home/Faq'
import Finding from '@/components/Home/Finding'

import Hero from '@/components/Home/Hero'
import LatestNews from '@/components/Home/LatestNews'
import NewArrivals from '@/components/Home/NewArrivals'
import Original_products from '@/components/Home/Original_products'
import Poskapet from '@/components/Home/Poskapet'
import RightParts from '@/components/Home/RightParts'
import ToughParts from '@/components/Home/ToughParts'



const page = () => {
  return (
    <div> 
        <Hero/>
        <Original_products/>
        <BestSeller/>
      <RightParts/>   
      <Excellent/>
      <ToughParts/>
      <Poskapet/>
      <Descount/>
      <NewArrivals/>
      <Finding/>
      <Faq/>
      <LatestNews/>
    </div>
  )
}

export default page
