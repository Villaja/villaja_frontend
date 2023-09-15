/* eslint-disable react/prop-types */
import './singleItemCard.css'

const SingleItemCard = ({itemImg,itemName,itemPrice}) => {
  return (
    <div className="single-item-container">
        <div className="single-item-img">
            <img src={itemImg} alt="asdf" />
        </div>
        <div className="single-item-body">
            <div className="si-body-name">{itemName}</div>
            <div className="si-body-price">N{itemPrice}</div>
        </div>
        <div className="add-to-cart-btn">
            ADD TO CART
        </div>
    </div>
  )
}

export default SingleItemCard