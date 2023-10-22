/* eslint-disable react/prop-types */
import './categorycomponent.css'
import { catData } from '../../mock_data/Category_info'
import { useEffect, useState } from 'react';

const CategoryComponent = ({category,isMobile,setPriceFilter,setBrandFilter,setcolorFilter}) => {

    const [priceRangeValue,setPriceRangeValue] = useState("3000000")
    const [brandValue,setBrandValue] = useState([])
    const [colorValue,setcolorValue] = useState([])


    const HandleBrandChange = (e) => {
        if(e.target.checked)
        {
            setBrandValue([...brandValue,e.target.name.toLowerCase()])

        }
        else
        {
            if(brandValue.length === 1)
            {
                // let tempCol = colorValue.filter((b) => b!= e.target.name.toLowerCase())
                // tempCol.push()
                // console.log(tempCol);
                setBrandValue(["apple","oppo","samsung","infinix","nokia","blackberry","google"])
                
            }
            else setBrandValue(brandValue.filter((b) => b!= e.target.name))
        }
    }
    const HandleColorChange = (e) => {
        if(e.target.checked)
        {
            setcolorValue([...colorValue,e.target.name.toLowerCase()])
            console.log(e.target.name.toLowerCase());

        }
        else
        {
            if(colorValue.length === 1)
            {
                // let tempCol = colorValue.filter((b) => b!= e.target.name.toLowerCase())
                // tempCol.push()
                // console.log(tempCol);
                setcolorValue(["black","white","silver","gold","gray"])
                
            }
            else setcolorValue(colorValue.filter((b) => b!= e.target.name.toLowerCase()))
        }
    }

    useEffect(() => {
        setPriceFilter({min:500,max:priceRangeValue})
    },[priceRangeValue])
    useEffect(() => {
        if(brandValue?.length > 0)setBrandFilter(brandValue)
    },[brandValue])
    useEffect(() => {
        if(colorValue?.length > 0)setcolorFilter(colorValue)
    },[colorValue])

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

        <div className="filter-sub filter-sub-brand">
            <div className="filter-sub-title">
                Brand
            </div>
            <div className="filter-sub-body filter-body-brand">
                {catData[0]['brand'].map((brand,id) => {
                    return <div className="filter-sub-row filter-brand" key={id}>
                        <input type="checkbox" name={brand} id={brand} className='brand-check' onChange={(e) => HandleBrandChange(e)} />
                        <label htmlFor={brand}>{brand}</label>
                    </div>
                })}
            </div>

        </div>

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
        <div className="filter-sub filter-sub-color">
            <div className="filter-sub-title">
                Color
            </div>
            <div className="filter-sub-body">
                {catData[0]['color'].map((brand,id) => {
                    return <div className="filter-sub-row filter-brand" key={id}>
                        <input type="checkbox" name={brand} id={brand} className='brand-check' onChange={(e) => HandleColorChange(e)} />
                        <label htmlFor={brand}>{brand}</label>
                    </div>
                })}
            </div>
        </div>
        {/* <div className="filter-sub filter-sub-condition">
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