import "./PropertyRadio.css";
import PropTypes from "prop-types";

export const PropertyRadio = ({ className }) => {
    return (
      <div className={`property-radio ${className}`}>
        <div className="frame-6" />
      </div>
    );
  };
  
  PropertyRadio.propTypes = {
    className: PropTypes.string,
  };
  
