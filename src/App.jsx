import "./App.scss";
import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

import {
  Category,
  Chain,
  Discount,
  Merchant,
  Serial,
  Warehouse,
} from "./modules";
const list = [
  "Merchant",
  "Serial",
  "Chain",
  "Warehouse",
  "Category",
  "Discount",
];
function App() {
  const [activetab, setActivetab] = React.useState(0);
  const location = useLocation();
  React.useState(() => {
    let tab = 0;
    tab = list?.findIndex(
      (item) => location.pathname.replace("/", "") === item.toLowerCase()
    );
    setActivetab(tab);
  }, []);

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
        <Route path="/warehouse" element={<Warehouse />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/discount" element={<Discount />}></Route>
      </Routes>
    </>
  );
}

export default App;
