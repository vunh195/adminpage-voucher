import "./App.scss";
import { Merchant } from "./modules/Merchant";
import React from "react";
import { Serial } from "./modules/Serial";

function App() {
  const list = [
    "Merchant",
    "Serial",
    "Category",
    "Discount",
    "Chain",
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
      <div className="content">{activetab === 1 && <Serial />}</div>
    </div>
  );
}

export default App;
