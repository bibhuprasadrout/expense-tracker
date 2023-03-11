import { ExpenseTracker } from "../../Components/ExpenseTracker/ExpenseTracker";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Wrapper } from "../../DesignSystem/Wrapper/Wrapper";
import { Card } from "../../DesignSystem/Card/Card";
export const Home = () => {
  const homeAuth = useSelector((store) => store.auth);
  const [homeStatus, setHomeStatus] = useState(false);
  useEffect(() => {
    homeAuth?.currentLoginState ? setHomeStatus(true) : setHomeStatus(false);
  }, []);
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
