import EarPhones from './AccessoryImages/earphones.svg'
import watches from './AccessoryImages/watches.svg'
import speakers from './AccessoryImages/speakers.svg'
import microphones from './AccessoryImages/microphones.svg'
import chargers from './AccessoryImages/chargers.svg'
import cases from './AccessoryImages/cases.svg'
import storage from './AccessoryImages/storage.svg'
import gaming from './AccessoryImages/gaming.svg'
import keyboards from './AccessoryImages/keyboards.svg'
import bags from './AccessoryImages/bags.svg'
import stands from './AccessoryImages/stands.svg'
import stylus from './AccessoryImages/stylus.svg'

import './ShopAccessories.css'
import { useNavigate } from 'react-router-dom'

const ShopAccessories = () => {

    const navigate = useNavigate()
  return (
    <div className="item-cat-container">
        <div className="ic-header">
            <div className="item-cat-title">Shop Accessories</div>
            <div className="seemore-btn underline">Shop all &#8250; </div>
        </div>
        <div className="accessories-ic-body grid">
        <div
          className="flex flex-col justify-center items-center p-6 rounded-md bg-white shadow-md cursor-pointer"
          onClick={() => navigate(`/products?category=Accessories`)}
        >
          <div className="mb-4">
            <img src={EarPhones} alt="" />
          </div>
          <p className="max-w-[12ch] font-semibold text-xl text-center">EarPhones & HeadPhones</p>
        </div>
        <div
          className="flex flex-col justify-center items-center p-6 rounded-md bg-white shadow-md cursor-pointer"
          onClick={() => navigate(`/products?category=Accessories`)}
        >
          <div className="mb-4">
            <img src={watches} alt="" />
          </div>
          <p className="max-w-[12ch] font-semibold text-xl text-center">Smart Watches</p>
        </div>
        <div
          className="flex flex-col justify-center items-center p-6 rounded-md bg-white shadow-md cursor-pointer"
          onClick={() => navigate(`/products?category=Accessories`)}
        >
          <div className="mb-4">
            <img src={speakers} alt="" />
          </div>
          <p className="max-w-[12ch] font-semibold text-xl text-center">Speakers</p>
        </div>
        <div
          className="flex flex-col justify-center items-center p-6 rounded-md bg-white shadow-md cursor-pointer"
          onClick={() => navigate(`/products?category=Accessories`)}
        >
          <div className="mb-4">
            <img src={microphones} alt="" />
          </div>
          <p className="max-w-[12ch] font-semibold text-xl text-center">Microphones</p>
        </div>
        <div
          className="flex flex-col justify-center items-center p-6 rounded-md bg-white shadow-md cursor-pointer"
          onClick={() => navigate(`/products?category=Accessories`)}
        >
          <div className="mb-4">
            <img src={chargers} alt="" />
          </div>
          <p className="max-w-[12ch] font-semibold text-xl text-center">Chargers & More</p>
        </div>
        <div
          className="flex flex-col justify-center items-center p-6 rounded-md bg-white shadow-md cursor-pointer"
          onClick={() => navigate(`/products?category=Accessories`)}
        >
          <div className="mb-4">
            <img src={cases} alt="" />
          </div>
          <p className="max-w-[12ch] font-semibold text-xl text-center">Cases & Covers</p>
        </div>
        <div
          className="flex flex-col justify-center items-center p-6 rounded-md bg-white shadow-md cursor-pointer"
          onClick={() => navigate(`/products?category=Accessories`)}
        >
          <div className="mb-4">
            <img src={storage} alt="" />
          </div>
          <p className="max-w-[12ch] font-semibold text-xl text-center">Storage</p>
        </div>
        <div
          className="flex flex-col justify-center items-center p-6 rounded-md bg-white shadow-md cursor-pointer"
          onClick={() => navigate(`/products?category=Accessories`)}
        >
          <div className="mb-4">
            <img src={gaming} alt="" />
          </div>
          <p className="max-w-[12ch] font-semibold text-xl text-center">Gaming Accessories</p>
        </div>
        <div
          className="flex flex-col justify-center items-center p-6 rounded-md bg-white shadow-md cursor-pointer"
          onClick={() => navigate(`/products?category=Accessories`)}
        >
          <div className="mb-4">
            <img src={keyboards} alt="" />
          </div>
          <p className="max-w-[12ch] font-semibold text-xl text-center">Keyboards & Mice</p>
        </div>
        <div
          className="flex flex-col justify-center items-center p-6 rounded-md bg-white shadow-md cursor-pointer"
          onClick={() => navigate(`/products?category=Accessories`)}
        >
          <div className="mb-4">
            <img src={bags} alt="" />
          </div>
          <p className="max-w-[12ch] font-semibold text-xl text-center">Laptop Bags</p>
        </div>
        <div
          className="flex flex-col justify-center items-center p-6 rounded-md bg-white shadow-md cursor-pointer"
          onClick={() => navigate(`/products?category=Accessories`)}
        >
          <div className="mb-4">
            <img src={stands} alt="" />
          </div>
          <p className="max-w-[12ch] font-semibold text-xl text-center">Stands & Lights</p>
        </div>
        <div
          className="flex flex-col justify-center items-center p-6 rounded-md bg-white shadow-md cursor-pointer"
          onClick={() => navigate(`/products?category=Accessories`)}
        >
          <div className="mb-4">
            <img src={stylus} alt="" />
          </div>
          <p className="max-w-[12ch] font-semibold text-xl text-center">Stylus & Tablet</p>
        </div>
      </div>
    </div>
  );
};

const AccessoriesCard = ({ data }) => {
  return (
    <div>
      <div>
        <img src={data.img} alt="" />
      </div>
      <p>{data.text}</p>
    </div>
  );
};

export default ShopAccessories;