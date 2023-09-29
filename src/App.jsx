import "./App.scss";
import { Merchant } from "./modules/Merchant";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Serial } from "./modules/Serial";
const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>ADMIN VOUCHER</h1>,
    errorElement: <h1>aa</h1>,
  },
  {
    path: "/merchant",
    element: <Merchant />,
  },
  {
    path: "/serial",
    element: <Serial />,
  },
]);
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
              {/* <Link to={`/${item.toLowerCase()}`}>{item}</Link> */}
              <a href={`/${item.toLowerCase()}`}>{item} </a>
            </div>
          );
        })}
      </div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
