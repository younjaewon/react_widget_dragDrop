import { useState } from "react";
import Menu1 from "./canvancomponent/Menu1";
import "./App.css";

const menuData = [
  { id: 1, name: "재고현황", type: "DATA" },
  { id: 2, name: "판매현황", type: "CHART" },
  { id: 3, name: "미판매현황", type: "CALENDER" },
  { id: 4, name: "구매현황", type: "DATA" },
  { id: 5, name: "입고현황", type: "DATA" },
];

let posX = 0;
let posY = 0;

function DragAndDrop() {
  const [dragMenu, setDragMenu] = useState(null);

  const handleOnDragOver = (e) => {
    e.preventDefault();
  };

  const handleOnDragStart = (e) => {
    posX = e.clientX;
    posY = e.clientY;
    let nodeCopy = e.target.cloneNode(true);

    setDragMenu(nodeCopy);
  };

  const handleOnDragEnd = (e) => {};

  const handleOnDrop = (e) => {
    const dropContent = e.target;
    posX = e.clientX;
    posY = e.clientY;
    dragMenu.style.left = posX + "px";
    dragMenu.style.top = posY + "px";
    dragMenu.style.position = "relative";
    dragMenu.classList.add("dragLayout");

    let menuItemType = document.getElementById(dragMenu.id).attributes[1].value;
    let renderComponent = null;

    switch (menuItemType) {
      case "DATA":
        renderComponent = <Menu1 style={(posX, posY)}>{menuItemType}</Menu1>;
        // return <Menu1 style={(posX, posY)}>{menuItemType}</Menu1>;
        console.log("data");
        break;
      case "CHART":
        console.log("chart");
        break;
      case "CALENDER":
        console.log("calender");
        break;
    }

    debugger;
    return <Menu1 style={(posX, posY)}>{menuItemType}</Menu1>;
    dropContent.append(renderComponent);
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "10%",
          height: "600px",
          border: "1px solid",
          zIndex: "2",
        }}
      >
        {menuData.map((menu) => (
          <div
            key={menu.id}
            id={menu.name}
            type={menu.type}
            draggable
            onDragStart={handleOnDragStart}
            onDragEnd={handleOnDragEnd}
          >
            {menu.name}
          </div>
        ))}
      </div>
      <div
        onDragOver={handleOnDragOver}
        onDrop={handleOnDrop}
        style={{
          display: "flex",
          width: "100%",
          height: "600px",
          border: "1px solid",
          position: "absolute",
          background: "grey",
        }}
      ></div>
    </div>
  );
}

export default DragAndDrop;
