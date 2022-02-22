import React from "react";

const MenuNav = ({ id, name, type, onHandleClick }) => {
  return (
    <div
      className="menuNavBorder grab"
      id={id}
      name={name}
      type={type}
      onClick={(e) => onHandleClick(e)}
    >
      {name}
    </div>
  );
};

export default MenuNav;
