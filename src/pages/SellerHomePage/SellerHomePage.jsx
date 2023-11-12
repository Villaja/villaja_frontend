import './SellerHomePage.css'
import SellerFooter from '../../components/SellerFooter/SellerFooter'
import SellerHomeHeader from './SellerHomeHeader'
import MainImg from './assets/mainImg.svg'
import VillajaLogoLight from './assets/heroImgs.svg'
import StepOne from './assets/hit1.svg'
import StepTwo from './assets/hit2.svg'
import StepThree from './assets/hit3.svg'
import StepFour from './assets/hit4.svg'
import Done from './assets/done.svg'
import Categories from '../../components/Route/Categories/Categories'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SellerHomePage = () => {
    const navigate = useNavigate()
  return (
    <div className="seller-homepage-wrapper">
        <SellerHomeHeader/>
        <div className="seller-homepage-container">
            <div className="shc-mains">
                <div className="shc-heros">
                    <img src={MainImg} alt="" />
                    <div className="shc-heroes-text">
                        <div className="sht-top-text">
                            Start selling with &nbsp; <img src={VillajaLogoLight} alt="" />
                        </div>
                        <div className="sht-sell-btn" onClick={() => navigate('/shop/login')}>
                            START SELLING
                        </div>
                    </div>
                </div>
            </div>

            <div className="item-cat-container new-itc">
                <div className="ic-header">
                    <div className="item-cat-title">How it works</div>
                    {/* <div className="seemore-btn">See more &#8250; </div> */}
                </div>
                <div className="ic-body cat-ic-body new-itc-body">
                        <div className="itc-item">
                            <img src={StepOne} alt="" />
                            <p className="stepText">Step 1</p>
                            <p className="stepInfo">Create a seller account on villaja.com</p>
                        </div>
                        <div className="itc-item">
                            <img src={StepTwo} alt="" />
                            <p className="stepText">Step 2</p>
                            <p className="stepInfo">Complete  registration and become a Certified Villajer</p>
                        </div>
                        <div className="itc-item">
                            <img src={StepThree} alt="" />
                            <p className="stepText">Step 3</p>
                            <p className="stepInfo">List your products, add details and set prices</p>
                        </div>
                        <div className="itc-item">
                            <img src={StepFour} alt="" />
                            <p className="stepText">Step 4</p>
                            <p className="stepInfo">Sell and enjoy benefits of the Villaja platform</p>
                        </div>
                        {/* <ProductCard data={i} key={index} /> */}
                </div>
            </div>

            <div style={{width:"100%",maxWidth:"1528px"}}>
                <Categories isSellerHomepage={true}/>
            </div>

            <div className="item-cat-container new-itc">
                <div className="ic-header">
                    <div className="item-cat-title">Why Villaja?</div>
                    {/* <div className="seemore-btn">See more &#8250; </div> */}
                </div>
                <div className="ic-body new-itc-body-last">
                        <div className="itc-item-last">
                            <img src={Done} alt="" />
                            <p className="stepText-last">Free until your first sale</p>
                        </div>
                        <div className="itc-item-last">
                            <img src={Done} alt="" />
                            <p className="stepText-last">Improve your revenue</p>
                        </div>
                        <div className="itc-item-last">
                            <img src={Done} alt="" />
                            <p className="stepText-last">We handle the logistics</p>
                        </div>
                        {/* <ProductCard data={i} key={index} /> */}
                </div>
            </div>

            <div className="sht-sell-btn-last" onClick={() => navigate('/shop/login')}>
                            START SELLING
                        </div>
        </div>
        <SellerFooter/>
    </div>
  )
}

export default SellerHomePage