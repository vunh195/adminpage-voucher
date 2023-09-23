import "./App.scss";
import { Merchant } from "./modules/Merchant";
import React from "react";

function App() {
  const list = [
    "Merchant",
    "Chain",
    "Category",
    "Discount",
    "Sotre",
    "Warehouse",
  ];
  const [activetab, setActivetab] = React.useState(0);

  return (
    <div className="App">
      <div className="nav">
        <h2>VOUCHER ADMIN</h2>
        {list?.map((item, key) => {
          return (
            <div
              className={key === activetab ? "nav-item active" : "nav-item"}
              key={key}
              onClick={() => setActivetab(key)}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="content">{activetab === 0 && <Merchant />}</div>
    </div>
  );
}

export default App;
