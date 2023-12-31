import { Buttons } from "../../Seller Login Page/Buttons/Buttons";
import PropTypes from "prop-types";
import "./TopBarSellerSide.css";

export const TopBarSellerSide = ({ property1, className, frameClassName, hasGroup = true }) => {
    return (
      <div className={`top-bar-seller-side ${property1} ${className}`}>
        {["seller-dashboard", "seller-home", "seller-sign-up"].includes(property1) && (
          <div className={`frame-wrapper ${frameClassName}`}>
            <div className="frame-3">
              <div className="seller-centre-logo">
                {["seller-home", "seller-sign-up"].includes(property1) && (
                  <>
                    <div className="text-wrapper-7">villaja</div>
                    <div className="text-wrapper-8">seller centre</div>
                  </>
                )}
  
                {property1 === "seller-dashboard" && <>villaja</>}
              </div>
              {hasGroup && (
                <div className="group-2">
                  {property1 === "seller-home" && (
                    <>
                      <Buttons className="buttons-instance" property1="xsmall-outlined" text="LOGIN" />
                      <Buttons className="buttons-2" property1="xsmall-filled" text="SIGN UP" />
                    </>
                  )}
  
                  {property1 === "seller-dashboard" && <>seller centre</>}
  
                  {property1 === "seller-sign-up" && (
                    <Buttons
                      className="buttons-4"
                      divClassNameOverride="buttons-3"
                      property1="default-outlined"
                      text1="LOG IN"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        )}
  
        {property1 === "add-product" && (
          <>
            <div className="seller-centre-logo-wrapper">
              <div className="seller-centre-logo-2">
                <div className="text-wrapper-7">villaja</div>
                <div className="text-wrapper-8">seller centre</div>
              </div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <p className="p">Add a Product - Add Details</p>
                <img className="close" alt="Close" src="/img/close.svg" />
                <div className="group-3">
                  <Buttons className="buttons-5" property1="small-filled" text="SAVE &amp; ADD" />
                  <Buttons className="buttons-6" property1="smaall-outlined" text="CANCEL" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };
  
  TopBarSellerSide.propTypes = {
    property1: PropTypes.oneOf(["seller-home", "add-product", "seller-sign-up", "seller-dashboard"]),
    hasGroup: PropTypes.bool,
    className: PropTypes.string,
     frameClassName: PropTypes.string,
  };
  
