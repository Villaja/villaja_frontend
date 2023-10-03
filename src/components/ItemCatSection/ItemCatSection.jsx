import ProductCard from '../Route/ProductCard/ProductCard';
import ItemCatSingle from './ItemCatSingle'
import './itemCatSection.css'
import { useState , useEffect} from 'react';
import { useSelector } from "react-redux";


const ItemCatSection = ({itemCatTitle,items}) => {

  const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (allProducts && allProducts?.length > 0) {
      const allProductsData = [...allProducts];
      const sortedData = allProductsData?.sort((a, b) => b.sold_out - a.sold_out);
      const firstFive = sortedData && sortedData.slice(0, 6);
      setData(firstFive);
      setLoading(false);
    }
  }, [allProducts]);


  return (
    <div className="item-cat-container">
        <div className="ic-header">
            <div className="item-cat-title">{itemCatTitle}</div>
            <div className="seemore-btn">See more &#8250; </div>
        </div>
        <div className="ic-body">
            {/* {items.map((item,id) => {
                return <ItemCatSingle itemName={item.itemName} itemImg={item.itemImg} itemPrice={item.itemPrice} key={id}/>
            })} */}

            {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <>
              {data &&
                data.map((i, index) => (
                  <ProductCard data={i} key={index} />
                ))}
            </>
          )}
        </div>
        {/* </div> */}
    </div>
  )
}

export default ItemCatSection