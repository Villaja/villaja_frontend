import PropTypes from "prop-types";
import { Logo } from "../Logo";
import { TopMenuComp } from "../TopMenuComp";
import "./BottomDirectory.css";

const BottomDirectory = ({ property1 }) => {
  const isSellerPov = property1 === "seller-pov";
  const isDefault = property1 === "default";

  return (
    <div className={`bottom-directory ${property1}`}>
      <Logo
        className="logo-instance"
        divClassName={isSellerPov ? "class" : "class-2"}
        divClassName1={isSellerPov ? "class" : "class-2"}
        divClassName2={isSellerPov ? "class" : "class-2"}
        divClassName3={isSellerPov ? "class" : "class-2"}
        divClassName4={isSellerPov ? "class" : "class-2"}
        divClassName5={isSellerPov ? "class" : "class-2"}
        divClassNameOverride={isSellerPov ? "class" : "class-2"}
      />
      <div className="frame-2">
        <TopMenuComp
          className="top-menu-comp-instance"
          divClassName={isDefault ? "instance-node" : "class-3"}
          text={isDefault ? "Sell on villaja" : "Help"}
        />
        <TopMenuComp
          className="top-menu-comp-instance"
          divClassName={isSellerPov ? "class-3" : "instance-node"}
          text={isSellerPov ? "Terms of Use" : "Help"}
        />
        <TopMenuComp
          className="top-menu-comp-instance"
          divClassName={isSellerPov ? "class-3" : "instance-node"}
          text={isSellerPov ? "Privacy Policy" : "Terms of Use"}
        />
        <TopMenuComp
          className={isSellerPov ? "top-menu-comp-2" : "top-menu-comp-instance"}
          divClassName={isSellerPov ? "class-3" : "instance-node"}
          text={isSellerPov ? "Contact" : "Privacy Policy"}
        />
        {isDefault && (
          <>
            <TopMenuComp className="top-menu-comp-2" divClassName="instance-node" text="About" />
            <TopMenuComp className="top-menu-comp-2" divClassName="instance-node" text="Contact" />
            <TopMenuComp className="top-menu-comp-2" divClassName="instance-node" text="Careers" />
          </>
        )}
      </div>
    </div>
  );
};

BottomDirectory.propTypes = {
  property1: PropTypes.oneOf(["seller-pov", "default"]),
};


