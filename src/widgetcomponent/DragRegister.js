import React from "react";
import { useDrag } from "react-dnd";

const DragRegister = ({ name, id, type, draged, children }) => {
  const [{ isDragging }, drag, previewRef] = useDrag(() => ({
    type: "menu",
    item: { id, name, type, draged },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item) => {},
  }));

  return (
    <div ref={previewRef}>
      <div ref={drag}>{children}</div>
    </div>
  );
};

export default DragRegister;
