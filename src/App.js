import styled from "styled-components";
import React from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Utils/Store/Store";
import { Navbar } from "./Navbar/Navbar";
import { Wrapper } from "./DesignSystem/Wrapper/Wrapper";
const AppContentWrapper = styled(Wrapper)`
  padding: 1rem;
  display: flex;
  flex-flow: column;
`;
const App = () => {
  return (
    <>
      <Provider store={Store}>
        <AppContentWrapper>
          <Navbar />
          <Outlet />
        </AppContentWrapper>
      </Provider>
    </>
  );
};
export default App;
