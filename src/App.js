import React from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Utils/Store/Store";
import { Navbar } from "./Navbar/Navbar";
const App = () => {
  return (
    <>
      <Provider store={Store}>
        <Navbar />
        <Outlet />
      </Provider>
    </>
  );
};
export default App;
