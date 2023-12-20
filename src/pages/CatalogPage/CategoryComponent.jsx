import './categorycomponent.css'
import { catData } from '../../mock_data/Category_info'
import { useEffect, useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import Ratings from '../../components/Products/Ratings';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CategoryComponent = ({category,isMobile,setPriceFilter,setRatingFilter,setOsFilter,setConditionFilter,setOpenFilter}) => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    const [priceRangeValue,setPriceRangeValue] = useState("30000000")
    const [priceMinValue,setPriceMinValue] = useState('0')
    const [brandValue,setBrandValue] = useState([])
    const [colorValue,setcolorValue] = useState([])
    const [osList,setOsList] = useState([])

    const HandleBrandChange = (e) => {
        if(e.target.checked)
        {
            setBrandValue([...brandValue,e.target.name.toLowerCase()])

        }
        else
        {
            if(brandValue.length <= 1)
            {
                // let tempCol = colorValue.filter((b) => b!= e.target.name.toLowerCase())
                // tempCol.push()
                // console.log(tempCol);
                setBrandValue([])
                setBrandFilter(["apple","oppo","samsung","infinix","nokia","blackberry","google"])
                
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
            if(colorValue.length <= 1)
            {
                // let tempCol = colorValue.filter((b) => b!= e.target.name.toLowerCase())
                // tempCol.push()
                // console.log(tempCol);
                setcolorValue(["black","white","silver","gold","gray"])
                
            }
            else setcolorValue(colorValue.filter((b) => b!= e.target.name.toLowerCase()))
        }
    }

    const HandleRatingChange = (val) => {
        const searchTerm = searchParams.get('searchTerm')
            const category = searchParams.get('category')
            // const rating = searchParams.get('ratings')
       const os = searchParams.get('os')?.split(',')
        const condition = searchParams.get('condition')

        // searchParams.delete('ratings')
        if (val === 'clear') navigate(`/products?${category?'category='+category:'searchTerm='+searchTerm}${os?'&os='+os:''}${condition?'&condition='+condition:''}`)
        else navigate(`/products?${category?'category='+category:'searchTerm='+searchTerm}&ratings=${val}${os?'&os='+os:''}${condition?'&condition='+condition:''}`)

    }

    const handleOsModify = (e) => {
        if (e.target.checked == true)
        {
            setOsList([...osList,e.target.value])
        }
        else
        {
            setOsList(osList.filter((os) => os != e.target.value))
        }
    }


    useEffect(() => {
        HandleOsChange(osList)
    },[osList])

    const HandleOsChange = (val) => {
            const category = searchParams.get('category')
            const searchTerm = searchParams.get('searchTerm')
            const rating = searchParams.get('ratings')
    //    const os = searchParams.get('os')?.split(',')
        const condition = searchParams.get('condition')

        // searchParams.delete('ratings')
        if (val === 'clear' || val.length < 1) navigate(`/products?${category?'category='+category:'searchTerm='+searchTerm}${condition?'&condition='+condition:''}${rating?'&ratings='+rating:''}`)
        else if(val.length >= 1) navigate(`/products?${category?'category='+category:'searchTerm='+searchTerm}&os=${val}${condition?'&condition='+condition:''}${rating?'&ratings='+rating:''}`)
        

    }
    const HandleConditionChange = (val) => {
        const searchTerm = searchParams.get('searchTerm')
            const category = searchParams.get('category')
            const rating = searchParams.get('ratings')
       const os = searchParams.get('os')?.split(',')
        // const condition = searchParams.get('condition')

        // searchParams.delete('ratings')
        if (val === 'clear') navigate(`/products?${category?'category='+category:'searchTerm='+searchTerm}${os?'&os='+os:''}${rating?'&ratings='+rating:''}`)
        else navigate(`/products?${category?'category='+category:'searchTerm='+searchTerm}&condition=${val}${os?'&os='+os:''}${rating?'&ratings='+rating:''}`)

    }

    useEffect(() => {
        setPriceFilter({min:priceMinValue,max:priceRangeValue})
    },[priceRangeValue,priceMinValue])
    useEffect(() => {
        if(brandValue?.length > 0)setBrandFilter(brandValue)
    },[brandValue])
    useEffect(() => {
        if(colorValue?.length > 0)setcolorFilter(colorValue)
    },[colorValue])

    console.log(catData[0]['subcat']);
  return (
    <div className={`filter-container ${isMobile?'filter-container-mobile':''}`}>

        <div className="filter-container-action">
            <div className="close-btn">
                <RxCross1
                size={20}
                className="cursor-pointer"
                onClick={() => setOpenFilter(false)}
                />
            </div>
            <div className="close-name">Filter</div>
        </div>


        {/* <div className="filter-top-bar">
            Category
        </div>

        <div className="filter-cat">
            {category}
        </div> */}
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
                        <input type="checkbox" name={brand} id={brand} className='brand-check' onChange={(e) => HandleBrandChange(e)} />
                        <label htmlFor={brand}>{brand}</label>
                    </div>
                })}
            </div>

        </div> */}

        <div className="filter-sub filter-sub-price">
            <div className="filter-sub-title">
                <div className=' font-medium text-xl'>
                    Price &#40;&#8358;&#41;
                </div>

                {/* <div>Apply</div> */}
            </div>
            <div className="filter-sub-body">
                <div className="price-slider">
                    <input type="range" name="price" id="price-range" value={priceRangeValue} min="500" max="3000000" onChange={(e) => setPriceRangeValue(e.target.value)}/>
                </div>
                <div className="price-ranges">
                    <input type='text' value={priceMinValue} className="price-max-value" onChange={(e) => setPriceMinValue(e.target.value)}/>
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
            <div className="filter-sub-title font-medium text-xl">
                Customer Reviews
            </div>
            <div className="filter-sub-body">
                 <div className="filter-sub-row filter-brand ml-4 cursor-pointer hover:text-[#025492]" onClick={() => HandleRatingChange('clear')}>
                        Clear
                    </div>
                 <div className="filter-sub-row filter-brand ml-4 cursor-pointer hover:text-[#025492]" onClick={() => HandleRatingChange(4)}>
                        <Ratings rating={4}/>& Up
                    </div>
                 <div className="filter-sub-row filter-brand ml-4 cursor-pointer hover:text-[#025492]" onClick={() => HandleRatingChange(3)}>
                        <Ratings rating={3}/>& Up
                    </div>
                 <div className="filter-sub-row filter-brand ml-4 cursor-pointer hover:text-[#025492]" onClick={() => HandleRatingChange(2)}>
                        <Ratings rating={2}/>& Up
                    </div>
                 <div className="filter-sub-row filter-brand ml-4 cursor-pointer hover:text-[#025492]" onClick={() => HandleRatingChange(1)}>
                        <Ratings rating={1}/>& Up
                    </div>
                
            </div>
        </div>


        <div className="filter-sub filter-sub-condition">
            <div className="filter-sub-title font-medium text-xl">
                Operating System
            </div>
            <div className="filter-sub-body">
                {catData[0]['operating system'].map((os,id) => {
                    return <div className="filter-sub-row filter-brand ml-4 cursor-pointer hover:text-[#025492]" key={id}>
                        <input type="checkbox" name="os" id={os+"-os-check"} className='' value={os} onClick={(e) => handleOsModify(e)}/>
                    <label htmlFor={os+"-os-check"}>{os}</label>
                        
                    </div>
                })}
            </div>
        </div>

        <div className="filter-sub filter-sub-condition">
            <div className="filter-sub-title font-medium text-xl">
                Condition
            </div>
            <div className="filter-sub-body">
                <div className="filter-sub-row filter-brand ml-4 cursor-pointer hover:text-[#025492]" onClick={() => HandleConditionChange('clear')}>
                        Clear
                    </div>
                {catData[0]['condition'].map((condition,id) => {
                    return <div className="filter-sub-row filter-brand ml-4 cursor-pointer hover:text-[#025492]" key={id} onClick={() => HandleConditionChange(condition)}>
                        {condition}
                    </div>
                })}

                
            </div>
        </div>
    </div>
  )
}

export default CategoryComponent