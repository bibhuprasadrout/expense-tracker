import { NormalButton } from "../../DesignSystem/Button/Button";
import { LoginWapper } from "./LoginStyle";
import { LoginBody } from "./LoginStyle";
import { LoginForm } from "./LoginStyle";
import { Instruction } from "./LoginStyle";
import { specialChars } from "../AuthConfig";
import { digits } from "../AuthConfig";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, logoff } from "../../Utils/Slices/UserAuthSlice";

export const Login = () => {
  const userInfo = useSelector((userinfo) => userinfo.user.items);
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const [userNameIsValid, setUserNameIsValid] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [formFlow, setFormFlow] = useState(true);
  const navigate = useNavigate();

  // handle the flow of the form, if to render user ui or password ui, triggered on clicking procced
  const handleUserFormFlow = (e) => {
    e.preventDefault();
    setFormFlow(false);
  };
  // handle user form
  //handle if user has entered a proper user name
  const handleUser = (e) => {
    const string = e.target.value;
    const char = string.charAt(string.length - 1);
    const validChar = specialChars.filter((specialChar) => {
      if (char === specialChar) {
        return char;
      }
    });
    if (validChar != "") {
      setUser((user) => user);
    } else {
      setUser(e.target.value);
    }
  };
  // handle if user has entered a valid user name available in our database when user moved away from input
  const hangleUserNameValidity = () => {
    if (user.length === 6) {
      const userStatus = userInfo.filter((item) => {
        if (user === item.user) {
          return user;
        }
      });
      if (userStatus != "") {
        setUserNameIsValid(true);
      } else {
        setUserNameIsValid(false);
      }
    } else {
      setUserNameIsValid(false);
    }
  };
  // handle if user has entered a valid user name available in our database while user is changing input
  useEffect(() => {
    console.log("current user value " + user);
    if (user.length === 6) {
      const userStatus = userInfo.filter((item) => {
        if (user === item.user) {
          return user;
        }
      });
      if (userStatus != "") {
        setUserNameIsValid(true);
      } else {
        setUserNameIsValid(false);
      }
    } else {
      setUserNameIsValid(true);
    }
  }, [user]);
  // handle password form
  //handle if user has entered a proper password
  const handlePassword = (e) => {
    const string = e.target.value;
    const char = string.charAt(string.length - 1);
    digits.map((digit) => {
      if (char != digit) {
        setPassword((password) => password);
      } else {
        setPassword(e.target.value);
      }
    });
  };
  // handle if user has entered a valid password available in our database when user moved away from input
  const hanglePasswordValidity = () => {
    if (password.length === 6) {
      const userStatus = userInfo.filter((item) => {
        if (password === item.password) {
          return user;
        }
      });
      if (userStatus != "") {
        setPasswordIsValid(true);
      } else {
        setPasswordIsValid(false);
      }
    } else {
      setPasswordIsValid(false);
    }
  };
  // handle if user has entered a valid password available in our database while user is changing input
  useEffect(() => {
    userInfo.map((item) => {
      if (password.length === 6) {
        const userStatus = userInfo.filter((item) => {
          if (password === item.password) {
            return user;
          }
        });
        if (userStatus != "") {
          setPasswordIsValid(true);
        } else {
          setPasswordIsValid(false);
        }
      } else {
        setPasswordIsValid(true);
      }
    });
  }, [password]);
  // Submiting the entiere form for autheintication
  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (userNameIsValid && passwordIsValid) {
      (() => {
        dispatch(login());
      })();
      navigate("/home");
    } else {
      (() => {
        dispatch(logoff());
      })();
    }
  };
  return (
    <>
      <LoginWapper>
        {formFlow ? (
          <LoginBody>
            <LoginForm>
              <div className="formControl">
                <input
                  maxLength={6}
                  placeholder={"Entere your user name here."}
                  onChange={handleUser}
                  onBlur={hangleUserNameValidity}
                  value={user}
                ></input>
                {userNameIsValid ? (
                  <div style={{ display: "none" }}></div>
                ) : (
                  <p className="error">*Enter a valid user name.</p>
                )}
              </div>
              <div className="formAction">
                {user != "" ? (
                  <NormalButton className="action" onClick={handleUserFormFlow}>
                    Proceed
                  </NormalButton>
                ) : (
                  <NormalButton className="action">
                    Enter user name
                  </NormalButton>
                )}
              </div>
            </LoginForm>
            <Instruction>
              <div className="instruction">
                <p>Enter one the following user names:</p>
                <ul className="userNameList">
                  <p>X8SJSJ</p>
                  <p>XSM93K</p>
                  <p>XQM2WS</p>
                  <p>XQ32WS</p>
                  <p>X28WIQ</p>
                </ul>
              </div>
            </Instruction>
          </LoginBody>
        ) : (
          <LoginBody>
            <LoginForm onSubmit={handleAuthSubmit}>
              <div className="formControl passwordForm">
                <input
                  maxLength={6}
                  placeholder="Entere your password here."
                  onChange={handlePassword}
                  onBlur={hanglePasswordValidity}
                  value={password}
                ></input>
                {passwordIsValid ? (
                  <div style={{ display: "none" }}></div>
                ) : (
                  <p className="error">*Enter a valid password.</p>
                )}
              </div>
              <div className="formAction">
                {password != "" ? (
                  <NormalButton type="submit" className="action">
                    Proceed
                  </NormalButton>
                ) : (
                  <NormalButton className="action">Enter password</NormalButton>
                )}
              </div>
            </LoginForm>
            <Instruction>
              <div className="instruction">
                <p>Enter the following password:</p>
                <ul className="userPasswordList">
                  <p>123456</p>
                </ul>
              </div>
            </Instruction>
          </LoginBody>
        )}
      </LoginWapper>
    </>
  );
};
