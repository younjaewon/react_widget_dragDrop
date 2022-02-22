import Menu1 from "./widgetcomponent/Menu1";
import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./dragAndDrop/DragDrop";

function App() {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <DragDrop />
      </DndProvider>
    </div>
  );
}

export default App;
