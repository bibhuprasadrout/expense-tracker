import { ExpenseTracker } from "../../Components/ExpenseTracker/ExpenseTracker";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Wrapper } from "../../DesignSystem/Wrapper/Wrapper";
import { Card } from "../../DesignSystem/Card/Card";
export const Home = () => {
  const homeStatus = useSelector((store) => store.userAuth.currentLoginState);
  useEffect(() => {}, []);
  return (
    <>
      <Wrapper>
        <Card>
          {homeStatus ? <ExpenseTracker /> : <div>Please login first</div>}
        </Card>
      </Wrapper>
    </>
  );
};
