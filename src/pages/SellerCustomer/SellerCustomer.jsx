/* eslint-disable react/prop-types */
import './sellerCustomer.css'
import { sampleCustomers } from '../../mock_data/Customer_info'

import { useState, useEffect } from 'react'

const SellerCustomer = () => {

  const [pageNumber,setPageNumber] = useState(10)
  const [invItemFiltered,setInvItemFiltered] = useState([])

  

  

  useEffect(() => {
    setInvItemFiltered(sampleCustomers.slice(pageNumber-10,pageNumber))
  },[pageNumber])

  return (
    <div className="inventory-wrapper">
        <div className="inventory-container">
            <div className="inventory-header">
                <div className="ih-left">
                    <div className='ih-left-text'>Customers</div>
                    
                </div>
                <div className="ih-right">
                    
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
                <div className="id-left"> {pageNumber-9 +"-" + pageNumber} &nbsp; / &nbsp;  {sampleCustomers.length} customers found</div>
                <div className="id-right">Download &#8250; </div>
            </div>

            <div className="inventory-main">
                <div className="im-table">
                    <div className="im-table-top customer-table-top">
                        <div className="imtt-item">Customer{"'"}s Name</div>
                        <div className="imtt-item">Email address</div>
                        <div className="imtt-item">Phone Number</div>
                        <div className="imtt-item">Date Added</div>
                    </div>
                    <div className="im-table-body"></div>
                </div>

                <div className="im-items">
                    {
                        invItemFiltered.map((item,id) => {
                            return <CustomerItem   item={item}  key={id}/>
                        })
                    }
                </div>

            </div>
                <div className="cid-undernav-wrapper">
                      <div className="cid-undernav">
                        <div className={`underNav-action underNav-previous ${pageNumber===10?'btn-inactive':""}`} onClick={() => {setPageNumber(pageNumber-10)}}>&#8249; &nbsp; &nbsp; previous</div>
                        <div className="underNav-current">{pageNumber/10}</div>
                        <div className="underNav-slash"> / </div>
                        <div className="underNav-total">{Math.ceil(sampleCustomers.length/10)}</div>
                        <div className={`underNav-action underNav-next ${pageNumber>=sampleCustomers.length?'btn-inactive':""}`} onClick={() => {setPageNumber(pageNumber+10)}}>Next &nbsp; &nbsp; &#8250;</div>
                      </div>
                    </div>
        </div>


    </div>
  )
}


const CustomerItem = ({item}) => {

    const {customerName,customerEmail,customerPhone,dateAdded,} = item

    

    return(
        <div className="inventory-item-container customer-item-container">
            <div className="ii-attribute ii-product">
                <div className="ii-product-name">{customerName}</div>
            </div>
            <div className="ii-attribute">{customerEmail}</div>
            <div className="ii-attribute">{customerPhone}</div>
            <div className="ii-attribute">{dateAdded}</div>
        </div>
    )
}



export default SellerCustomer