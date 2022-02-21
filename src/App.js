import { useState } from "react";
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

function App() {
  const [dragMenu, setDragMenu] = useState(null);
  const handleOnDragOver = (e) => {
    e.preventDefault();
  };

  const handleOnDrop = (e) => {
    const dropContent = e.target;
    posX = e.clientX;
    posY = e.clientY;
    debugger;
    dropContent.append(dragMenu);
  };

  const handleOnDragStart = (e) => {
    let nodeCopy = e.target.cloneNode(true);
    setDragMenu(nodeCopy);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "10%", border: "1px solid" }}>
        {menuData.map((menu) => (
          <div key={menu.id} draggable onDragStart={handleOnDragStart}>
            {menu.name}
          </div>
        ))}
      </div>
      <div
        onDragOver={handleOnDragOver}
        onDrop={handleOnDrop}
        style={{ width: "100%", height: "600px", border: "1px solid" }}
      ></div>
    </div>
  );
}

export default App;
