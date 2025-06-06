import Wrapper from "@/components/layout/Wrapper";
import HomeMain from './homes/home-4'
import MetaComponent from "@/components/common/MetaComponent";


const metadata = {
  title: 'Home-4 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

export default function Home() {
  return (
    <Wrapper>
      <MetaComponent meta={metadata} />
      <HomeMain/>
    </Wrapper>
    
  )
}
