import { ExpenseTracker } from "../../Components/ExpenseTracker/ExpenseTracker";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Wrapper } from "../../DesignSystem/Wrapper/Wrapper";
import { Card } from "../../DesignSystem/Card/Card";
export const Home = () => {
  const homeStatus = useSelector((store) => store.userAuth);
  useEffect(() => {}, []);
  return (
    <>
      <Wrapper>
        <Card>
          {homeStatus?.currentLoginState ? (
            <ExpenseTracker />
          ) : (
            <div>Please login first</div>
          )}
        </Card>
      </Wrapper>
    </>
  );
};
