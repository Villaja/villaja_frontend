/* eslint-disable react/prop-types */
import './sellerInventory.css'
import { sampleInventory } from '../../mock_data/Sample_Inventory_List'

import SearcIcon from '../../assets/search_icon.svg'
import closeIcon from '../../assets/close_icon.svg'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SellerInventory = () => {

  const [pageNumber,setPageNumber] = useState(5)
  const [invItemFiltered,setInvItemFiltered] = useState([])
  const [openAddModal,setOpenAddModal] = useState(false)

  const handleModalClose = () => {
        
        document.getElementsByTagName('body')[0].style.width = 'auto'
        document.getElementsByTagName('body')[0].style.height = 'auto'
        document.getElementsByTagName('body')[0].style.overflow = 'auto'
    }

  

  useEffect(() => {
    setInvItemFiltered(sampleInventory.slice(pageNumber-5,pageNumber))
  },[pageNumber])

  return (
    <div className="inventory-wrapper">
        <div className="inventory-container">
            <div className="inventory-header">
                <div className="ih-left">
                    <div className='ih-left-text'>Inventory</div>
                    <div className='ih-left-search'>
                        <img src={SearcIcon} alt="" />
                        <input type="text" name="" id="" placeholder='search inventory' />
                    </div>
                </div>
                <div className="ih-right">
                    <div className="inventory-add-btn" onClick={() => setOpenAddModal(true)}>ADD &nbsp; &nbsp; + </div>
                    
                    <div>
                        <label htmlFor="ih-table-filter">Sort by: </label>
                        <select name="" id="ih-table-filter">
                            <option value="Latest" selected >Latest</option>
                            <option value="Newest Arrivals">Newest Arrivals</option>
                            <option value="Price: High to Low">Price: High to Low</option>
                            <option value="Product Rating">Product Rating</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="inventory-download">
                <div className="id-left"> {pageNumber-4 +"-" + pageNumber} &nbsp; / &nbsp;  {sampleInventory.length} products found</div>
                <div className="id-right">Download &#8250; </div>
            </div>

            <div className="inventory-main">
                <div className="im-table">
                    <div className="im-table-top">
                        <div className="imtt-item">Product</div>
                        <div className="imtt-item">Unit Price</div>
                        <div className="imtt-item">Date Added</div>
                        <div className="imtt-item">In Stock</div>
                        <div className="imtt-item">SKU</div>
                    </div>
                    <div className="im-table-body"></div>
                </div>

                <div className="im-items">
                    {
                        invItemFiltered.map((item,id) => {
                            return <InventoryItem   item={item}  key={id}/>
                        })
                    }
                </div>

            </div>
                <div className="cid-undernav-wrapper">
                      <div className="cid-undernav">
                        <div className={`underNav-action underNav-previous ${pageNumber===5?'btn-inactive':""}`} onClick={() => {setPageNumber(pageNumber-5)}}>&#8249; &nbsp; &nbsp; previous</div>
                        <div className="underNav-current">{pageNumber/5}</div>
                        <div className="underNav-slash"> / </div>
                        <div className="underNav-total">{Math.ceil(sampleInventory.length/5)}</div>
                        <div className={`underNav-action underNav-next ${pageNumber>=sampleInventory.length?'btn-inactive':""}`} onClick={() => {setPageNumber(pageNumber+5)}}>Next &nbsp; &nbsp; &#8250;</div>
                      </div>
                    </div>
        </div>


        {openAddModal?<div className="add-item-modal">
                <div className="aimm-close-surround" onClick={()=> {handleModalClose();setOpenAddModal(false)}} style={{cursor:"pointer"}}></div>

                <AddItemModal setOpenAddModal={setOpenAddModal}/>
        </div>:null
}
    </div>
  )
}


const InventoryItem = ({item}) => {

    const {productImg,productName,productPrice,dateAdded,inStock,sku} = item

    

    return(
        <div className="inventory-item-container">
            <div className="ii-attribute ii-product">
                <div className="ii-product-img">
                    <img src={productImg} alt="" />
                </div>
                <div className="ii-product-name">{productName}</div>
            </div>
            <div className="ii-attribute">{productPrice}</div>
            <div className="ii-attribute">{dateAdded}</div>
            <div className="ii-attribute">{inStock}</div>
            <div className="ii-attribute ii-sku">{sku}</div>
        </div>
    )
}


const AddItemModal = ({setOpenAddModal}) => {

    const navigate = useNavigate()

    const handleModalClose = () => {
        
        document.getElementsByTagName('body')[0].style.width = 'auto'
        document.getElementsByTagName('body')[0].style.height = 'auto'
        document.getElementsByTagName('body')[0].style.overflow = 'auto'
    }

    useEffect(() => {
        console.log(document.getElementsByTagName('body'));
        document.getElementsByTagName('body')[0].style.width = '100vw'
        document.getElementsByTagName('body')[0].style.height = '100vh'
        document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    },[])
    return(
        <div className="add-item-modal-main">

                <div className="aim-top">
                    <div className="aim-top-left">Add a Product - Select Category</div>
                    <div className="aim-top-close" onClick={()=> {handleModalClose();setOpenAddModal(false)}} style={{cursor:"pointer"}}> <img src={closeIcon} alt="" /> </div>
                </div>
                <div className="aim-body">
                    <div className="aim-cat-container">
                        <div className="acc-title">Phones</div>
                        <div className="acc-category filter-sub-body">
                                <div className="filter-sub-row discount-sub" onClick={() => {navigate('/seller/new-product/Phones - Smart Phones')}}>
                                    <input type="radio" name="discount-type" id="td-radio" className='discount-radio' value="Top Deals"/>
                                    <label >Smart Phones</label>
                                </div>
                                <div className="filter-sub-row discount-sub" onClick={() => {navigate('/seller/new-product/Phones - Basic Phones')}}>
                                    <input type="radio" name="discount-type" id="dio-radio" className='discount-radio' value="Discount Items Only"/>
                                    <label >Basic Phones</label>
                                </div>
                                
                        </div>
                    </div>
                    <div className="aim-cat-container">
                        <div className="acc-title">Tablets</div>
                        <div className="acc-category">
                            <div className="filter-sub-row discount-sub" onClick={() => {navigate('/seller/new-product/Tablets - Pro.Tablets')}}>
                                    <input type="radio" name="discount-type" id="td-radio" className='discount-radio' value="Top Deals"/>
                                    <label >Pro.Tablets</label>
                                </div>
                                <div className="filter-sub-row discount-sub" onClick={() => {navigate('/seller/new-product/Tablets - Edu. Tablets')}}>
                                    <input type="radio" name="discount-type" id="dio-radio" className='discount-radio' value="Discount Items Only"/>
                                    <label >Edu. Tablets</label>
                                </div>
                        </div>

                    </div>
                    <div className="aim-cat-container">
                        <div className="acc-title">Computers</div>
                        <div className="acc-category">
                            <div className="filter-sub-row discount-sub" onClick={() => {navigate('/seller/new-product/Computers - Laptops')}}>
                                    <input type="radio" name="discount-type" id="td-radio" className='discount-radio' value="Top Deals"/>
                                    <label >Laptops</label>
                                </div>
                                <div className="filter-sub-row discount-sub" onClick={() => {navigate('/seller/new-product/Computers - Desktops')}}>
                                    <input type="radio" name="discount-type" id="dio-radio" className='discount-radio' value="Discount Items Only"/>
                                    <label >Desktops</label>
                                </div>
                        </div>

                    </div>
                    <div className="aim-cat-container">
                        <div className="acc-title">Accessories</div>
                        <div className="acc-category">
                            <div className="filter-sub-row discount-sub" onClick={() => {navigate('/seller/new-product/Accessories - Smartwatches')}}>
                                    <input type="radio" name="discount-type" id="td-radio" className='discount-radio' value="Top Deals"/>
                                    <label >Smartwatches</label>
                                </div>
                                <div className="filter-sub-row discount-sub" onClick={() => {navigate('/seller/new-product/Accessories - Microphones')}}>
                                    <input type="radio" name="discount-type" id="dio-radio" className='discount-radio' value="Discount Items Only"/>
                                    <label >Microphones</label>
                                </div>
                                <div className="filter-sub-row discount-sub" onClick={() => {navigate('/seller/new-product/Accessories - Stands, Lights')}}>
                                    <input type="radio" name="discount-type" id="dio-radio" className='discount-radio' value="Discount Items Only"/>
                                    <label >Stands, Lights</label>
                                </div>
                                <div className="filter-sub-row discount-sub" onClick={() => {navigate('/seller/new-product/Accessories - Laptop bags')}}>
                                    <input type="radio" name="discount-type" id="dio-radio" className='discount-radio' value="Discount Items Only"/>
                                    <label >Laptop bags</label>
                                </div>
                                <div className="filter-sub-row discount-sub" onClick={() => {navigate('/seller/new-product/Accessories - Earpieces')}}>
                                    <input type="radio" name="discount-type" id="dio-radio" className='discount-radio' value="Discount Items Only"/>
                                    <label >Earpieces</label>
                                </div>
                                <div className="filter-sub-row discount-sub" onClick={() => {navigate('/seller/new-product/Accessories - Keyboards, Mice')}}>
                                    <input type="radio" name="discount-type" id="dio-radio" className='discount-radio' value="Discount Items Only"/>
                                    <label >Keyboards, Mice</label>
                                </div>
                                <div className="filter-sub-row discount-sub" onClick={() => {navigate('/seller/new-product/Accessories - Chargers')}}>
                                    <input type="radio" name="discount-type" id="dio-radio" className='discount-radio' value="Discount Items Only"/>
                                    <label >Chargers</label>
                                </div>
                                <div className="filter-sub-row discount-sub" onClick={() => {navigate('/seller/new-product/Accessories - Gaming')}}>
                                    <input type="radio" name="discount-type" id="dio-radio" className='discount-radio' value="Discount Items Only"/>
                                    <label >Gaming</label>
                                </div>
                                <div className="filter-sub-row discount-sub" onClick={() => {navigate('/seller/new-product/Accessories - Speakers')}}>
                                    <input type="radio" name="discount-type" id="dio-radio" className='discount-radio' value="Discount Items Only"/>
                                    <label >Speakers</label>
                                </div>
                                <div className="filter-sub-row discount-sub" onClick={() => {navigate('/seller/new-product/Accessories - Phone Cases')}}>
                                    <input type="radio" name="discount-type" id="dio-radio" className='discount-radio' value="Discount Items Only"/>
                                    <label >Phone Cases</label>
                                </div>
                                <div className="filter-sub-row discount-sub" onClick={() => {navigate('/seller/new-product/Accessories - Storage')}}>
                                    <input type="radio" name="discount-type" id="dio-radio" className='discount-radio' value="Discount Items Only"/>
                                    <label >Storage</label>
                                </div>
                                <div className="filter-sub-row discount-sub" onClick={() => {navigate('/seller/new-product/Accessories - Stylus, Tablets')}}>
                                    <input type="radio" name="discount-type" id="dio-radio" className='discount-radio' value="Discount Items Only"/>
                                    <label >Stylus, Tablets</label>
                                </div>
                        </div>

                    </div>
                </div>
            </div>
    )
}
export default SellerInventory