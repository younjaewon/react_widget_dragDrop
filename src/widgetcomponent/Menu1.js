import React, { useEffect, useState } from "react";

import "axui-datagrid/style.css";
import { DataGrid } from "axui-datagrid";

let copyColumn = [];
let copyData = [];

const Menu1 = ({ name, position, column, data }) => {
  const [gridData, setGridData] = useState(data);
  const [gridColumns, setGridColumns] = useState(data);

  useEffect(() => {
    copyColumn = [...column];
    copyData = [...data];

    copyColumn.map((data, index) => {
      data.key = data.order;
      data.label = data.columnName;
      data.order = data.order;
    });
    copyData.map((data) => {
      debugger;
    });

    setGridColumns(copyColumn);
  }, []);

  const datas = [
    { value: ["A01", "B01", "C"] },
    { value: ["A02", "B02", "C<b>a</b>"] },
    { value: ["A03", "B03", "C<b>a</b>"] },
    { value: ["A04", "B04", "C<b>a</b>"] },
    { value: ["A05", "B05", "C<b>a</b>"] },
    { value: ["A06", "B06", "C<b>a</b>"] },
    { value: ["A07", "B07", "C<b>a</b>"] },
    { value: ["A08", "B08", "C<b>a</b>"] },
    { value: ["A09", "B09", "C<b>a</b>"] },
    { value: ["A10", "B10", "C<b>a</b>"] },
    { value: ["A11", "B11", "C<b>a</b>"] },
  ];

  return (
    <>
      <div>
        <div
          className="grabContent"
          style={{ left: position.x + "px", top: position.y + "px" }}
        >
          <span
            className="fw600 grab"
            style={{ display: "flex", width: "100%" }}
          >
            {name}
          </span>
          <DataGrid
            width={300}
            height={300}
            style={{ fontSize: "12px", margin: "10px" }}
            columns={gridColumns}
            data={datas}
            dataLength={datas.length}
            options={{}}
          />
        </div>
      </div>
    </>
  );
};

export default Menu1;
