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
        <div className='accessories-ic-body grid'>
            <div className='flex flex-col justify-center items-center p-[1.12rem] rounded-[0.5rem] shadow-[0_4px_8px_0px_rgba(0,0,0,0.12)]'  onClick = {() => navigate('/products?category=Accessories')}>
                <div className='mb-[1.26rem]'>
                    <img src={EarPhones} alt="" />
                </div>
                <p className='max-w-[12ch] font-[600] text-[1.125] text-center'>EarPhones & HeadPhones</p>
            </div>
            <div className='flex flex-col justify-center items-center p-[1.12rem] rounded-[0.5rem] shadow-[0_4px_8px_0px_rgba(0,0,0,0.12)]' onClick = {() => navigate('/products?category=Accessories')}>
                <div className='mb-[1.26rem]'>
                    <img src={watches} alt="" />
                </div>
                <p className='max-w-[12ch] font-[600] text-[1.125] text-center'>Smart <br /> Watches</p>
            </div>
            <div className='flex flex-col justify-center items-center p-[1.12rem] rounded-[0.5rem] shadow-[0_4px_8px_0px_rgba(0,0,0,0.12)]' onClick = {() => navigate('/products?category=Accessories')}>
                <div className='mb-[1.26rem]'>
                    <img src={speakers} alt="" />
                </div>
                <p className='max-w-[12ch] font-[600] text-[1.125] text-center'>Speakers</p>
            </div>
            <div className='flex flex-col justify-center items-center p-[1.12rem] rounded-[0.5rem] shadow-[0_4px_8px_0px_rgba(0,0,0,0.12)]' onClick = {() => navigate('/products?category=Accessories')}>
                <div className='mb-[1.26rem]'>
                    <img src={microphones} alt="" />
                </div>
                <p className='max-w-[12ch] font-[600] text-[1.125] text-center'>Microphones</p>
            </div>
            <div className='flex flex-col justify-center items-center p-[1.12rem] rounded-[0.5rem] shadow-[0_4px_8px_0px_rgba(0,0,0,0.12)]' onClick = {() => navigate('/products?category=Accessories')}>
                <div className='mb-[1.26rem]'>
                    <img src={chargers} alt="" />
                </div>
                <p className='max-w-[12ch] font-[600] text-[1.125] text-center'>Chargers & <br /> More</p>
            </div>
            <div className='flex flex-col justify-center items-center p-[1.12rem] rounded-[0.5rem] shadow-[0_4px_8px_0px_rgba(0,0,0,0.12)]' onClick = {() => navigate('/products?category=Accessories')}>
                <div className='mb-[1.26rem]'>
                    <img src={cases} alt="" />
                </div>
                <p className='max-w-[12ch] font-[600] text-[1.125] text-center'>Cases &  <br /> Covers</p>
            </div>
            <div className='flex flex-col justify-center items-center p-[1.12rem] rounded-[0.5rem] shadow-[0_4px_8px_0px_rgba(0,0,0,0.12)]' onClick = {() => navigate('/products?category=Accessories')}>
                <div className='mb-[1.26rem]'>
                    <img src={storage} alt="" />
                </div>
                <p className='max-w-[12ch] font-[600] text-[1.125] text-center'>Storage</p>
            </div>
            <div className='flex flex-col justify-center items-center p-[1.12rem] rounded-[0.5rem] shadow-[0_4px_8px_0px_rgba(0,0,0,0.12)]' onClick = {() => navigate('/products?category=Accessories')}>
                <div className='mb-[1.26rem]'>
                    <img src={gaming} alt="" />
                </div>
                <p className='max-w-[12ch] font-[600] text-[1.125] text-center'>Gaming Accessories</p>
            </div>
            <div className='flex flex-col justify-center items-center p-[1.12rem] rounded-[0.5rem] shadow-[0_4px_8px_0px_rgba(0,0,0,0.12)]' onClick = {() => navigate('/products?category=Accessories')}>
                <div className='mb-[1.26rem]'>
                    <img src={keyboards} alt="" />
                </div>
                <p className='max-w-[12ch] font-[600] text-[1.125] text-center'>Keyboards & Mice</p>
            </div>
            <div className='flex flex-col justify-center items-center p-[1.12rem] rounded-[0.5rem] shadow-[0_4px_8px_0px_rgba(0,0,0,0.12)]' onClick = {() => navigate('/products?category=Accessories')}>
                <div className='mb-[1.26rem]'>
                    <img src={bags} alt="" />
                </div>
                <p className='max-w-[12ch] font-[600] text-[1.125] text-center'>Laptop Bags</p>
            </div>
            <div className='flex flex-col justify-center items-center p-[1.12rem] rounded-[0.5rem] shadow-[0_4px_8px_0px_rgba(0,0,0,0.12)]' onClick = {() => navigate('/products?category=Accessories')}>
                <div className='mb-[1.26rem]'>
                    <img src={stands} alt="" />
                </div>
                <p className='max-w-[12ch] font-[600] text-[1.125] text-center'>Stands & Lights</p>
            </div>
            <div className='flex flex-col justify-center items-center p-[1.12rem] rounded-[0.5rem] shadow-[0_4px_8px_0px_rgba(0,0,0,0.12)]' onClick = {() => navigate('/products?category=Accessories')}>
                <div className='mb-[1.26rem]'>
                    <img src={stylus} alt="" />
                </div>
                <p className='max-w-[12ch] font-[600] text-[1.125] text-center'>Stylus & Tablet</p>
            </div>
            
        </div>
        
    </div>
  )
}


const AccessoriesCard = ({data}) => {
    return (
        <div>
            <div>
                <img src={data.img} alt="" />
            </div>
            <p>{data.text}</p>
        </div>
    )
}

export default ShopAccessories