import './sellerNewProduct.css'

const SellerNewProduct = () => {
  return (
    <div className="snp-wrapper">
        <div className="snp-container">
                <div className="snp-top">
                    <div className="snp-top-title">
                        Add a Product - Add Details
                    </div>

                    <div className="snp-top-action">
                        <div className="snp-action snp-cancel">CANCEL</div>
                        <div className="snp-action snp-save">SAVE & ADD</div>
                    </div>
                </div>

            <div className="snp-main">
                <div className="snp-left">
                    <div className="snp-info">
                        <p>Product Name</p>
                        <input type="text" name="" id="product-name" placeholder='Insert product name here ... '/>
                        <p>Please do not include the brand name here</p>
                    </div>
                    <div className="snp-info">
                        <p>Product Description</p>
                        <textarea type="text" name="" id="product-description" placeholder="Summarize the product's key features ... "/>
                    </div>
                </div>
                <div className="snp-right">
                    right
                </div>
            </div>
        </div>
    </div>
  )
}

export default SellerNewProduct