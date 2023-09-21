import PropTypes from "prop-types";
import { useReducer } from "react";
import { CheckoutSelection } from "../../Seller SignUp Page/CheckoutSelection";
import "./SelectPayment.css";

export const SelectPayment = ({
    property1,
    className,
    checkoutSelectionText = "Pay with Debit Card",
    checkoutSelectionText1 = "Pay with Bank Transfer",
  }) => {
    const [state, dispatch] = useReducer(reducer, {
      property1: property1 || "default",
    });
  
    return (
      <div className={`select-payment ${className}`}>
        <CheckoutSelection
          className="checkout-selection-comps"
          onClick={() => {
            dispatch("click");
          }}
          property1={state.property1 === "debit-card" ? "selected" : "selection-inactive"}
          text={checkoutSelectionText}
        />
        <CheckoutSelection
          className="checkout-selection-instance"
          onClick={() => {
            dispatch("click_260");
          }}
          property1={state.property1 === "bank-transfer" ? "selected" : "selection-inactive"}
          text={checkoutSelectionText1}
        />
      </div>
    );
  };
  
  function reducer(state, action) {
    switch (action) {
      case "click":
        return {
          ...state,
          property1: "debit-card",
        };
  
      case "click_260":
        return {
          ...state,
          property1: "bank-transfer",
        };
    }
  
    return state;
  }
  
  SelectPayment.propTypes = {
    property1: PropTypes.oneOf(["bank-transfer", "debit-card", "default"]),
    checkoutSelectionText: PropTypes.string,
    checkoutSelectionText1: PropTypes.string,
    className: PropTypes.string,
  };
  