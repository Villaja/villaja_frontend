import React, { useState } from 'react';
import './villajaHeaderDropdown.css';

const VillajaHeaderDropdown = ({ categoryNames }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`dropdown-container ${isOpen ? 'open' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="dc-header">Sub categories</div>
      <div className="dc-main">
        {categoryNames.map((name, id) => (
          <div className="dc-main-cat" key={id}>
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VillajaHeaderDropdown;
