import './itemCatSingle.css'

const ItemCatSingle = ({itemImg,itemName,itemPrice}) => {

  
  return (
    <div className="ics-container">
        <div className="ics-img">
            <img src={itemImg} alt="asdf" />
        </div>
        <div className="ics-body">
            <div className="ics-body-name">{itemName}</div>
            <div className="ics-body-price">N{itemPrice}</div>
        </div>
    </div>
  )
}

export default ItemCatSingle