import HeroPic from '../../assets/hero_iphonepic.svg'
import villajaLogo from '../../assets/villaja_footer_logo.svg'
import searchIcon from '../../assets/search_icon.svg'
import './villajaHero.css'



const Villaja_hero = () => {
  return (
    <div className="hero-container">
        <div className="hero-pic-container">
            <img src={HeroPic} alt="" />
        </div>
        <div className="hero-search-section">
            <div className="hs-logo">
                <img src={villajaLogo} alt="" />
            </div>
            <div className="hs-text"><span>Phones</span> <span>from sellers you can trust</span></div>
            <div className="hs-search-bar">
                <div className="search-input">
                    <img src={searchIcon} alt="" />
                    <input type="text" name="hero-query" id="hero-search-input" placeholder='Search...'/>
                </div>
                <div className="search-btn">Go</div>
            </div>
        </div>
    </div>
  )
}

export default Villaja_hero