import React, { useState } from "react";

const Menu2 = () => {
  const [grab, setGrab] = useState(null);

  const _onDragOver = (e) => {
    e.preventDefault();
  };

  const _onDragStart = (e) => {
    setGrab(e.target);
    e.target.classList.add("grabbing");
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target);
  };

  const _onDragEnd = (e) => {
    e.target.classList.remove("grabbing");

    e.dataTransfer.dropEffect = "move";
  };

  const _onDrop = (e) => {
    debugger;
  };
  return (
    <div
      style={{ width: "200px", height: "100px", background: "orange" }}
      draggable
      onDragOver={_onDragOver}
      onDragStart={_onDragStart}
      onDragEnd={_onDragEnd}
      onDrop={_onDrop}
    >
      메뉴2
    </div>
  );
};

export default Menu2;
