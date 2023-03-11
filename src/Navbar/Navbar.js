import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card } from "../DesignSystem/Card/Card";
import { Wrapper } from "../DesignSystem/Wrapper/Wrapper";
import { useSelector, useDispatch } from "react-redux";
import { logoff } from "../Utils/Slices/UserAuthSlice";
const NavbarWrapper = styled(Wrapper)`
  padding: 1rem 0;
  .navbarLogo {
  }
`;
const NavbarCard = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .navbarLogo {
    font-weight: bold;
  }
  .navMenu {
    display: flex;
    gap: 1rem;
    padding: 0 1rem;
  }
`;
const NavMenuItem = styled(Card)``;
export const Navbar = () => {
  const dispatch = useDispatch();
  const loginStatus = useSelector((store) => store.userAuth);
  const handleLoginStatus = () => {
    (() => dispatch(logoff()))();
  };
  return (
    <>
      <NavbarWrapper>
        <NavbarCard>
          <Link to={"/"}>
            <code className="navbarLogo">Trakem All</code>
          </Link>
          <div className="navMenu">
            <Link to={"/home"}>
              <NavMenuItem>Home</NavMenuItem>
            </Link>
            {loginStatus?.currentLoginState ? (
              <Link to={"/"} onClick={handleLoginStatus}>
                <NavMenuItem>Logoff </NavMenuItem>
              </Link>
            ) : (
              <Link to={"/login"} onClick={handleLoginStatus}>
                <NavMenuItem>Login </NavMenuItem>
              </Link>
            )}
          </div>
        </NavbarCard>
      </NavbarWrapper>
    </>
  );
};
