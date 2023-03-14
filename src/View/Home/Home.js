import styled from "styled-components";
import { ExpenseTracker } from "../../Components/ExpenseTracker/ExpenseTracker";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Wrapper } from "../../DesignSystem/Wrapper/Wrapper";
import { Card } from "../../DesignSystem/Card/Card";
const HomeWrapper = styled(Wrapper)`
  min-height: calc(100vh - 8rem);
  height: 100%;
`;
const HomeCard = styled(Card)`
  min-height: inherit;
`;
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
          {homeStatus ? <ExpenseTracker /> : <div>Please login first</div>}
        </HomeCard>
      </HomeWrapper>
    </>
  );
};
