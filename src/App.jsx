import "./App.scss";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import { Chain, Merchant, Serial } from "./modules";
const list = [
  "Merchant",
  "Serial",
  "Category",
  "Discount",
  "Chain",
  "Warehouse",
];
function App() {
  const [activetab, setActivetab] = React.useState(0);
  return (
    <>
      <div className="nav">
        <h2>VOUCHER ADMIN</h2>
        {list?.map((item, key) => {
          return (
            <Link to={`${item.toLowerCase()}`}>
              <div
                className={key === activetab ? "nav-item active" : "nav-item"}
                key={key}
                onClick={() => setActivetab(key)}
              >
                {item}
              </div>
            </Link>
          );
        })}
      </div>
      <Routes>
        <Route path="/merchant" element={<Merchant />}></Route>
        <Route path="/serial" element={<Serial />}></Route>
        <Route path="/chain" element={<Chain />}></Route>
      </Routes>
    </>
  );
}

export default App;
