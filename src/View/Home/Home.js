import styled from "styled-components";
import { ExpenseTracker } from "../../Components/ExpenseTracker/ExpenseTracker";
import { ExpenseTrackerLoginFirst } from "../../Components/ExpenseTracker/ExpenseTrackerLoginFirst";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Wrapper } from "../../DesignSystem/Wrapper/Wrapper";
import { Card } from "../../DesignSystem/Card/Card";
const HomeWrapper = styled(Wrapper)``;
const HomeCard = styled(Card)``;
export const Home = () => {
  const homeAuth = useSelector((store) => store.userAuth);
  const [homeStatus, setHomeStatus] = useState(false);
  useEffect(() => {
    homeAuth?.currentLoginState ? setHomeStatus(true) : setHomeStatus(false);
  }, []);
  return (
    <>
      <HomeWrapper>
        <HomeCard>
          {homeStatus ? <ExpenseTracker /> : <ExpenseTrackerLoginFirst />}
        </HomeCard>
      </HomeWrapper>
    </>
  );
};
