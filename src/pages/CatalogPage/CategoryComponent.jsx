/* eslint-disable react/prop-types */
import './categorycomponent.css'
import { catData } from '../../mock_data/Category_info'
import { useEffect, useState } from 'react';

const CategoryComponent = ({category,isMobile,setPriceFilter}) => {

    const [priceRangeValue,setPriceRangeValue] = useState("3000000")

    useEffect(() => {
        setPriceFilter({min:500,max:priceRangeValue})
    },[priceRangeValue])

    console.log(catData[0]['subcat']);
  return (
    <div className={`filter-container ${isMobile?'filter-container-mobile':''}`}>
        <div className="filter-top-bar">
            Category
        </div>

        <div className="filter-cat">
            {category}
        </div>
        {/* <div className="filter-sub filter-sub=cat">
            

                {catData[0]['subcat'].map((cat,id) => {
                return <div className="filter-sub-row filter-sub-cat" key={id}>
                    <div>
                        {cat}
                    </div>
                </div>
            })}
        </div> */}

        {/* <div className="filter-sub filter-sub-brand">
            <div className="filter-sub-title">
                Brand
            </div>
            <div className="filter-sub-body filter-body-brand">
                {catData[0]['brand'].map((brand,id) => {
                    return <div className="filter-sub-row filter-brand" key={id}>
                        <input type="checkbox" name={brand} id={brand} className='brand-check' />
                        <label htmlFor={brand}>{brand}</label>
                    </div>
                })}
            </div>

        </div> */}

        <div className="filter-sub filter-sub-price">
            <div className="filter-sub-title">
                <div>
                    Price &#40;&#8358;&#41;
                </div>

                {/* <div>Apply</div> */}
            </div>
            <div className="filter-sub-body">
                <div className="price-slider">
                    <input type="range" name="price" id="price-range" value={priceRangeValue} min="500" max="3000000" onChange={(e) => setPriceRangeValue(e.target.value)}/>
                </div>
                <div className="price-ranges">
                    <input type='text' value={500} className="price-max-value" readOnly={true}/>
                    <span>-</span>
                    <input type='text' value={priceRangeValue} className="price-max-value" onChange={(e) => setPriceRangeValue(e.target.value)} />
                </div>
            </div>
        </div>
        {/* <div className="filter-sub filter-sub-discount">
            <div className="filter-sub-title">
                Discount
            </div>
            <div className="filter-sub-body">
                <div className="filter-sub-row discount-sub">
                    <input type="radio" name="discount-type" id="td-radio" className='discount-radio' value="Top Deals"/>
                    <label >Top Deals</label>
                </div>
                <div className="filter-sub-row discount-sub">
                    <input type="radio" name="discount-type" id="dio-radio" className='discount-radio' value="Discount Items Only"/>
                    <label >Discount Items Only</label>
                </div>
                
            </div>
        </div> */}
        {/* <div className="filter-sub filter-sub-color">
            <div className="filter-sub-title">
                Color
            </div>
            <div className="filter-sub-body">
                {catData[0]['color'].map((brand,id) => {
                    return <div className="filter-sub-row filter-brand" key={id}>
                        <input type="checkbox" name={brand} id={brand} className='brand-check' />
                        <label htmlFor={brand}>{brand}</label>
                    </div>
                })}
            </div>
        </div>
        <div className="filter-sub filter-sub-condition">
            <div className="filter-sub-title">
                Condition
            </div>
            <div className="filter-sub-body">
                {catData[0]['condition'].map((brand,id) => {
                    return <div className="filter-sub-row filter-brand" key={id}>
                        <input type="checkbox" name={brand} id={brand} className='brand-check' />
                        <label htmlFor={brand}>{brand}</label>
                    </div>
                })}
            </div>
        </div> */}
    </div>
  )
}

export default CategoryComponent