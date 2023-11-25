import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import '../components/ShopAccessories/ShopAccessories.css'
import EarPhones from '../components/ShopAccessories/AccessoryImages/earphones.svg'
import watches from '../components/ShopAccessories/AccessoryImages/watches.svg';
import speakers from '../components/ShopAccessories/AccessoryImages/speakers.svg';
import microphones from '../components/ShopAccessories/AccessoryImages/microphones.svg';
import chargers from '../components/ShopAccessories/AccessoryImages/chargers.svg';
import cases from '../components/ShopAccessories/AccessoryImages/cases.svg';
import storage from '../components/ShopAccessories/AccessoryImages/storage.svg';
import gaming from '../components/ShopAccessories/AccessoryImages/gaming.svg';
import keyboards from '../components/ShopAccessories/AccessoryImages/keyboards.svg';
import bags from '../components/ShopAccessories/AccessoryImages/bags.svg';
import stands from '../components/ShopAccessories/AccessoryImages/stands.svg';
import stylus from '../components/ShopAccessories/AccessoryImages/stylus.svg';
import Header from '../components/Layout/Header'
import VillajaFooter from '../components/VillajaFooter/VillajaFooter';


function Accessories() {
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
      navigate(`/products?category=${category}`);
    };

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=''>
        <Header/>
         <div className="item-cat-container w-[91.67%] mx-auto min-h-[75vh]">
      <div className="ic-header">
        <div className="item-cat-title">Shop Accessories</div>
      </div>
      <div className="accessories-ic-body grid">
        {[
          { image: EarPhones, category: 'Earphones and Headphones' },
          { image: watches, category: 'Smart Watched' },
          { image: speakers, category: 'Speakers' },
          { image: microphones, category: 'Microphones' },
          { image: chargers, category: 'Chargers and More' },
          { image: cases, category: 'Cases and Covers' },
          { image: storage, category: 'Storage' },
          { image: gaming, category: 'Gaming Assessories' },
          { image: keyboards, category: 'Keyboards and Mice' },
          { image: bags, category: 'Laptop Bags' },
          { image: stands, category: 'Stands and lights' },
          { image: stylus, category: 'Stylus and tablets' },
          // { image: stylus, category: 'Stylus and tablets' },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center p-6 rounded-md bg-white shadow-md cursor-pointer"
            onClick={() => handleCategoryClick(item.category)}
          >
            <div className="mb-4">
              <img src={item.image} alt="" />
            </div>
            <p className="max-w-[12ch] font-semibold text text-center">{item.category}</p>
          </div>
        ))}
      </div>
    </div>

    <VillajaFooter/>
    </div>
  )
}

export default Accessories
