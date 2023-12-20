import { useNavigate } from 'react-router-dom';
import './ShopAccessories.css';

// Import your accessory images here
import EarPhones from './AccessoryImages/earphones.svg';
import watches from './AccessoryImages/watches.svg';
import speakers from './AccessoryImages/speakers.svg';
import microphones from './AccessoryImages/microphones.svg';
import chargers from './AccessoryImages/chargers.svg';
import cases from './AccessoryImages/cases.svg';
import storage from './AccessoryImages/storage.svg';
import gaming from './AccessoryImages/gaming.svg';
import keyboards from './AccessoryImages/keyboards.svg';
import bags from './AccessoryImages/bags.svg';
import stands from './AccessoryImages/stands.svg';
import stylus from './AccessoryImages/stylus.svg';

const ShopAccessories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <div className="item-cat-container w-[91.67%] mx-auto">
      <div className="ic-header">
        <div className="item-cat-title">SHOP ACCESSORIES</div>
      </div>
      <div className="accessories-ic-body grid ">
        
        {[
          { image: EarPhones, category: 'Earphones and Headphones' },
          { image: watches, category: 'Smart Watches' },
          { image: speakers, category: 'Speakers' },
          { image: microphones, category: 'Microphones' },
          { image: chargers, category: 'Chargers and More' },
          { image: cases, category: 'Cases and Covers' },
          { image: storage, category: 'Storage' },
          { image: gaming, category: 'Gaming Accessories' },
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
            <p className="max-w-[12ch] font-semibold text text-center uppercase">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopAccessories;
