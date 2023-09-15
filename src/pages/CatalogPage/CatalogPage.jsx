import ItemCatSection from '../../components/ItemCatSection/ItemCatSection'
import Villaja_hero from '../../components/VillajaHero/Villaja_hero'
import './catalogpage.css'
import { items } from '../../mock_data/Sample_Items'
import CategoryComponent from './CategoryComponent'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const CatalogPage = () => {

  const [category,setCategory] = useState('')
  const location = useLocation()

  useEffect(()=> {
    var tempCat = location.pathname.split('/')[2].split('-')
    setCategory(tempCat[0].charAt(0).toUpperCase() + tempCat[0].slice(1) + " " + tempCat[1].charAt(0).toUpperCase() + tempCat[1].slice(1))
  },[location.pathname])

  return (
    <div className="catalog-page-container">
        <Villaja_hero isHomepage={false}/>
        <div className="catalog-category-main">
            <ItemCatSection itemCatTitle={"Best Selling Items"} items={items}/>

            <div className="catalog-page-body">
                <div className="catalog-filter-section">
                  <CategoryComponent category={category}/>
                </div>
                <div className="catalog-item-display">
                    <div className="cid-top-bar">
                      <div className="cid-top-catname">
                         {category}
                      </div>
                      <div className="cid-top-mobile-filter">

                      </div>
                    </div>
                    <div className="cid-main"></div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CatalogPage