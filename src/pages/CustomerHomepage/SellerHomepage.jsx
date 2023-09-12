import VillajaHeader from '../../components/VillajaHeader/VillajaHeader'
import VillajaFooter from '../../components/VillajaFooter/VillajaFooter'
import VillajaHero from '../../components/VillajaHero/Villaja_hero'
import './sellerHomepage.css'


const SellerHomepage = () => {
  return (
    <div className="sh-container">
      <VillajaHeader/>
      <VillajaHero/>
      <>Random Stuff</>
      <VillajaFooter/>
    </div>
  )
}

export default SellerHomepage