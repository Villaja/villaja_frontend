import ItemCatSingle from './ItemCatSingle'
import './itemCatSection.css'

const ItemCatSection = ({itemCatTitle,items}) => {
  return (
    <div className="item-cat-container">
        <div className="ic-header">
            <div className="item-cat-title">{itemCatTitle}</div>
            <div className="seemore-btn">See more &#8250; </div>
        </div>
        <div className="ic-body">
            {items.map((item,id) => {
                return <ItemCatSingle itemName={item.itemName} itemImg={item.itemImg} itemPrice={item.itemPrice} key={id}/>
            })}
        </div>
    </div>
  )
}

export default ItemCatSection