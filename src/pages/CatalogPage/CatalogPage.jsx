import ItemCatSection from '../../components/ItemCatSection/ItemCatSection'
import SingleItemCard from '../../components/SingleItemCard/SingleItemCard'
import Villaja_hero from '../../components/VillajaHero/Villaja_hero'
import './catalogpage.css'
import { cat_items } from '../../mock_data/Sample_Catalog_Items'
import { items } from '../../mock_data/Sample_Items'
import CategoryComponent from './CategoryComponent'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const CatalogPage = () => {

  const [pageNumber,setPageNumber] = useState(24)
  const [catItemFiltered,setCatItemFiltered] = useState([])
  const [category,setCategory] = useState('')
  const location = useLocation()

  useEffect(() => {
    setCatItemFiltered(cat_items.slice(pageNumber-24,pageNumber))
    // console.log(cat_items.slice(1,24))
    // console.log(pageNumber);
    // console.log(cat_items.slice(pageNumber-1,pageNumber+23));
  },[pageNumber])

  // useEffect(() => {
  //   setCatItemFiltered(cat_items)
  // },[])

  useEffect(()=> {
    var tempCat = location.pathname.split('/')[2].split('-')
    setCategory(tempCat[0].charAt(0).toUpperCase() + tempCat[0].slice(1) + " " + tempCat[1].charAt(0).toUpperCase() + tempCat[1].slice(1))
  },[location.pathname])

  return (
    <div className="catalog-page-container">
        <Villaja_hero isHomepage={false}/>
        <div className="catalog-category-main">
          <div className="cc-main-body">

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
                      <div className="cid-main-header">
                        1-24 &nbsp; / &nbsp; <span>240 products found</span>
                      </div>
                    <div className="cid-main">
                      {
                        catItemFiltered.map((item,id) => {
                          return <div className="cid-item" key={id}>
                            <SingleItemCard itemImg={item.itemImg} itemName={item.itemName} itemPrice={item.itemPrice}/>
                          </div>
                        })
                      }
                    </div>

                    <div className="cid-undernav-wrapper">
                      <div className="cid-undernav">
                        <div className={`underNav-action underNav-previous ${pageNumber===24?'btn-inactive':""}`} onClick={() => {setPageNumber(pageNumber-24)}}>&#8249; &nbsp; &nbsp; previous</div>
                        <div className="underNav-current">{pageNumber/24}</div>
                        <div className="underNav-slash"> / </div>
                        <div className="underNav-total">{Math.ceil(cat_items.length/24)}</div>
                        <div className={`underNav-action underNav-next ${pageNumber>=cat_items.length?'btn-inactive':""}`} onClick={() => {setPageNumber(pageNumber+24)}}>Next &nbsp; &nbsp; &#8250;</div>
                      </div>
                    </div>
                </div>
            </div>
          </div>

        </div>

    </div>
  )
}

export default CatalogPage