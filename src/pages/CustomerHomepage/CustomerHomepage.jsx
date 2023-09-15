import VillajaHero from '../../components/VillajaHero/Villaja_hero'
import './CustomerHomepage.css'
import ItemCatSection from '../../components/ItemCatSection/ItemCatSection'
import { items } from '../../mock_data/Sample_Items'



const SellerHomepage = () => {

  return (
    <div className="sh-container">
      {/* <VillajaHeader/> */}
      <VillajaHero/>
      <div className="homepage-category-body">
        <div className="homepage-category-main">

        <ItemCatSection itemCatTitle={"Best Selling Items"} items={items}/>
        <ItemCatSection itemCatTitle={"Top Deals"} items={items}/>
        <ItemCatSection itemCatTitle={"Official Store Deals"} items={items}/>
        </div>
      </div>
      {/* <VillajaFooter/> */}
    </div>
  )
}

export default SellerHomepage