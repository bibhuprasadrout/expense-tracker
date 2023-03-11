import styled from "styled-components";
import { Wrapper } from "../../DesignSystem/Wrapper/Wrapper";
import { Card } from "../../DesignSystem/Card/Card";
export const LoginWapper = styled(Wrapper)`
  min-height: calc(100vh - 8rem);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoginBody = styled(Card)`
  width: 100%;
  max-width: 40rem;
  height: 24rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;
export const LoginForm = styled.form`
  width: 100%;
  max-width: 40rem;
  max-height: 24rem;
  padding: 3rem 0 1.5rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  font-size: 1.1rem;
  @media (min-width: 42rem) {
    font-size: 1.5rem;
  }
  .formControl {
    margin: 1rem auto 0;
    width: 100%;
    max-width: 30rem;
    input {
      width: 100%;
      height: 3.7rem;
      padding: 0 1rem;
      font-size: inherit;
      border: 0;
      outline: 0;
      &:active,
      &:focus,
      &:focus-visible {
        border: 0;
        outline: 0;
      }
      &::placeholder {
        color: rgba(50, 50, 50, 0.3);
      }
    }
    .error {
      font-size: 0.77rem;
      color: rgba(255, 0, 0, 0.7);
      margin-top: 0.5rem;
    }
    position: relative;
    &:before,
    &.passwordForm:before {
      display: inline;
      font-size: 0.9rem;
      @media (min-width: 42rem) {
        font-size: 1.1rem;
      }
      position: absolute;
      top: -1.7rem;
      left: 0;
    }
    &:before {
      content: "User name";
    }
    &.passwordForm:before {
      content: "Password";
    }
  }
  .formAction {
    margin: 1rem auto;
    width: 100%;
    max-width: 30rem;
    .action {
      width: 100%;
      height: 3.7rem;
      font-size: inherit;
    }
  }
`;
export const Instruction = styled(Card)`
  width: 100%;
  max-width: 30rem;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .instruction {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    color: rgba(0, 0, 0, 0.7);
    .userNameList {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 0.5rem 1rem;
      font-size: 0.9rem;
      @media (min-width: 42rem) {
        font-size: 1rem;
      }
      p {
        min-width: 3.7rem;
      }
    }
  }
`;
