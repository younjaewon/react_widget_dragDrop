import React, { useState } from "react";

import "axui0datagrid/style.css";
import { DataGrid } from "axui-datagrid";

const Menu1 = (props) => {
  const typeGroup = {
    aTypes: ["A", "B", "C", "D"],
    bTypes: ["A01", "A02", "B01", "B02", "C01", "C02"],
    cTypes: ["Thomas", "Brant", "Ben", "Woo"],
    priceTypes: [500, 1000, 1500, 2000],
    amountTypes: [1, 2, 4, 5, 10, 20],
    saleTypes: ["T", "B", "H", "W"],
    saleDtTypes: [
      "2018-01-20",
      "2018-01-21",
      "2018-02-01",
      "2018-02-02",
      "2018-02-03",
    ],
    customerTypes: ["장기영", "황인서", "양용성", "이하종", "김혜미", "홍시아"],
  };

  const getTypes = (typeName) => {
    const types = typeGroup[typeName];
    return types[Math.floor(Math.random() * types.length)];
  };
  return (
    <>
      <h1>Basic</h1>

      <DataGrid
        width={300}
        height={300}
        data={gridData}
        columns={columns}
        options={{
          showLineNumber: true,
          showRowSelector: true,
          asidePanelWidth: 900,
          columnKeys: { deleted: "D" },
          header: {
            clickAction: "sort",
          },
        }}
        style={{ fontSize: "12px" }}
      />
    </>
  );
};

export default Menu1;
