import VillajaHeader from '../../components/VillajaHeader/VillajaHeader'
import VillajaFooter from '../../components/VillajaFooter/VillajaFooter'
import VillajaHero from '../../components/VillajaHero/Villaja_hero'
import './sellerHomepage.css'
import ItemCatSection from '../../components/ItemCatSection/ItemCatSection'


const SellerHomepage = () => {
  const items = [{itemImg:"src\\assets\\mockup\\phone2Cat.svg",itemName:"iphone",itemPrice:"150,000"},
  {itemImg:"src\\assets\\mockup\\phone2Cat.svg",itemName:"iphone",itemPrice:"150,000"},
  {itemImg:"src\\assets\\mockup\\phone2Cat.svg",itemName:"iphone",itemPrice:"150,000"},
  {itemImg:"src\\assets\\mockup\\phone2Cat.svg",itemName:"iphone",itemPrice:"150,000"},
  {itemImg:"src\\assets\\mockup\\phone2Cat.svg",itemName:"iphone",itemPrice:"150,000"},
  {itemImg:"src\\assets\\mockup\\phone2Cat.svg",itemName:"iphone",itemPrice:"150,000"}]
//   {itemImg:"src\\assets\\mockup\\tabletCat.svg",itemName:"Tablet",itemPrice:"150,000"},
//   {itemImg:"src\\assets\\mockup\\computersCat.svg",itemName:"Computer",itemPrice:"150,000"},
//   {itemImg:"src\\assets\\mockup\\accessoriesCat.svg",itemName:"Accessories",itemPrice:"150,000"},
// {itemImg:"src\\assets\\mockup\\accessoriesCat.svg",itemName:"Accessories",itemPrice:"150,000"},
// {itemImg:"src\\assets\\mockup\\accessoriesCat.svg",itemName:"Accessories",itemPrice:"150,000"}]

  return (
    <div className="sh-container">
      <VillajaHeader/>
      <VillajaHero/>
      <div className="homepage-category-body">
        <ItemCatSection itemCatTitle={"Best Selling Items"} items={items}/>
        <ItemCatSection itemCatTitle={"Top Deals"} items={items}/>
        <ItemCatSection itemCatTitle={"Official Store Deals"} items={items}/>
      </div>
      <VillajaFooter/>
    </div>
  )
}

export default SellerHomepage