import React from "react";
import "./TopMenuComp.css";

export const TopMenuComp = ({ className, divClassName, text = "top menu comp" }) => {
  return (
    <div className={`top-menu-comp ${className}`}>
      <div className="frame">
        <div className={`text-wrapper-6 ${divClassName}`}>{text}</div>
      </div>
    </div>
  );
};

