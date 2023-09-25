import PropTypes from "prop-types";
import "./PropertyInactive.css";

export const PropertyInactive = ({ className, text = "Filter name" }) => {
    return (
      <div className={`property-inactive ${className}`}>
        <div className="frame-wrapper">
          <div className="frame-5" />
        </div>
        <div className="filter-name">{text}</div>
      </div>
    );
  };
  
  PropertyInactive.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
  };
  