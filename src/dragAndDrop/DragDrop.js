import React, { useEffect, useState } from "react";
import DragRegister from "../widgetcomponent/DragRegister";
import MenuNav from "./MenuNav";
import Menu1 from "../widgetcomponent/Menu1";
import { useDrop } from "react-dnd";
import axios from "axios";

let posX = 0;
let posY = 0;

let type = "";
let name = "";
let id = "";

const DragDrop = () => {
  const [menuItem, setMenuItem] = useState([]);
  const [menuData, setMenuData] = useState([]);
  const [dropContent, setDropContent] = useState([]);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const [draged, setDraged] = useState(false);

  useEffect(() => {
    // 첫 렌더링일 때만 nav 메뉴 아이템 받기
    axios
      .get("http://8263-175-119-149-98.ngrok.io/api/list")
      .then((response) => {
        setMenuItem(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // 메뉴 아이템 Data 받기
    axios
      .get("http://8263-175-119-149-98.ngrok.io/api")
      .then((response) => {
        setMenuData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "menu", //useDrag에서 설정한 명칭과 무조건 동일해야함
    drop: (item, monitor) => dropMenuToContent(item, monitor), // 드래그 후 drop영역에 drop시 처리
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const dropMenuToContent = (item, monitor) => {
    // 드래그의 마지막으로 기록된 오프셋 x,y 좌표 반환
    posX = monitor.getClientOffset().x - 100; // 100은 nav width값
    posY = monitor.getClientOffset().y;
    moveContent(posX, posY);
    setDraged((draged) => !draged);
    moveContent(item);
  };

  // dropZone Item 드래그시 프리뷰 에러로 메뉴는 드래그가 아닌 클릭시 컨텐츠 추가로 변경
  // 변경했는데도 동일한 에러 발생
  // => 절대요소가 포함되면 chorme에서 프리뷰 크기 에러 git issue에 등록되어있음.

  // 메뉴 클릭시 content 추가
  const addDropZoneContent = (e) => {
    id = e.target.attributes.id.value;
    name = e.target.attributes.name.value;
    type = e.target.attributes.type.value;

    var copyMenuData = [...menuData];
    var dropTypeData = copyMenuData.find((data) => id === String(data.id));

    setDropContent((dropContent) => [...dropContent, dropTypeData]);
  };

  // content에 해당함수 전달
  const moveContent = (x, y) => {
    setPosition({ ...position }, (position.x = x), (position.y = y));
    // drop영역의 아이템 drag and drop시 position 변경
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="menuNav">
          {menuItem.map((menu) => {
            return (
              <MenuNav
                key={menu.id}
                id={menu.id}
                name={menu.name}
                type={menu.type}
                onHandleClick={addDropZoneContent}
              />
            );
          })}
        </div>

        <div className="dropContent" ref={drop}>
          {dropContent.map((content, index) => {
            if (content.type === "GRID") {
              return (
                <DragRegister
                  key={content.id + "-" + index}
                  name={content.name}
                  id={content.id + "-" + index}
                  type={content.type}
                  draged={draged}
                  moveHandle={moveContent}
                >
                  <Menu1
                    key={content.id + "-" + index}
                    column={content.column}
                    data={content.data}
                    name={content.name}
                    position={position}
                  />
                </DragRegister>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default DragDrop;
