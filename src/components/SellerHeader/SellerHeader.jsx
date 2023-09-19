import './sellerHeader.css'
import MenuBtn from '../../assets/menu_btn.svg'

const SellerHeader = ({setNavMobile}) => {
  return (
    <div className="seller-header-container">

      <div className="shc-mobile-menu">
        <img src={MenuBtn} alt="" onClick={() => setNavMobile(true)} />
      </div>
      <div className="shc-logo">
        <span>villaja</span> &nbsp; seller centre
      </div>
      
    </div>
  )
}

export default SellerHeader