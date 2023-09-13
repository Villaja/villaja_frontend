import ItemCatSection from '../../components/ItemCatSection/ItemCatSection'
import Villaja_hero from '../../components/VillajaHero/Villaja_hero'
import './catalogpage.css'
import { items } from '../../mock_data/Sample_Items'

const CatalogPage = () => {
  return (
    <div className="catalog-page-container">
        <Villaja_hero isHomepage={false}/>
        <div className="catalog-category-main">
            <ItemCatSection itemCatTitle={"Best Selling Items"} items={items}/>
        </div>

    </div>
  )
}

export default CatalogPage