import './sellerBalance.css'

import EyeIcon from '../../assets/eye_icon.svg'
import { useState } from 'react'


const SellerBalance = () => {
    const [balanceHidden,setBalanceHidden] = useState(false)

    return (
    <div className="seller-balance-wrapper">
        <div className="seller-balance-container">
            <div className="sbc-top">
                <div>Available Balance</div>
                <img src={EyeIcon} alt=""  onClick={() => setBalanceHidden(!balanceHidden)}/>
            </div>
            <div className="sbc-main">
                <div className='sbc-balance'>
                    NGN  <input  type={!balanceHidden?'text':'password'} id="sbc-balance" value={'100000'} readOnly/>
                </div>
                     
                <div className="sbc-payout-btn">
                    Request Payout
                </div>
            </div>
        </div>
    </div>
  )
}

export default SellerBalance