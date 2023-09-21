import { PropertyRadio } from "../../Seller SignUp Page/PropertyRadio";
import { useReducer } from "react"; 
import PropTypes from "prop-types";
import "./CheckoutSelection.css";

export const CheckoutSelection = ({ property1, className, text = "default", onClick }) => {
    const [state, dispatch] = useReducer(reducer, {
      property1: property1 || "selection-inactive",
    });
  
    return (
      <div
        className={`checkout-selection ${className}`}
        onClick={onClick}
        onMouseLeave={() => {
          dispatch("mouse_leave");
        }}
        onMouseEnter={() => {
          dispatch("mouse_enter");
        }}
      >
        {state.property1 === "selection-inactive" && <PropertyRadio className="side-bar-comps" />}
  
        {["selected", "selection-hover"].includes(state.property1) && (
          <div className="overlap-group-wrapper">
            <div className={`overlap-group-2 ${state.property1}`}>
              {state.property1 === "selection-hover" && (
                <>
                  <div className="frame-7" />
                  <div className="ellipse-2" />
                </>
              )}
  
              {state.property1 === "selected" && <div className="frame-8" />}
            </div>
          </div>
        )}
  
        <div className="default-7">{text}</div>
      </div>
    );
  };
  
  function reducer(state, action) {
    if (state.property1 === "selection-inactive") {
      switch (action) {
        case "mouse_enter":
          return {
            property1: "selection-hover",
          };
      }
    }
  
    if (state.property1 === "selection-hover") {
      switch (action) {
        case "mouse_leave":
          return {
            property1: "selection-inactive",
          };
  
        case "click":
          return {
            property1: "selected",
          };
      }
    }
  
    return state;
  }
  
  CheckoutSelection.propTypes = {
    property1: PropTypes.oneOf(["selection-inactive", "selection-hover", "selected"]),
    text: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.string,
  };
  