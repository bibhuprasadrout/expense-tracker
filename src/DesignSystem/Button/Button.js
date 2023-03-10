import styled, { css } from "styled-components";
const Button = css`
  appearance: none;
  background-color: rgba(255, 255, 255, 0.7);
  border: 7px solid rgba(225, 225, 225, 0.7);
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  cursor: pointer;
  fill: currentcolor;
  height: 3rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.25px;
  line-height: normal;
  max-width: 130%;
  overflow: visible;
  padding: 1rem 3rem;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform, opacity;
  z-index: 0;
  &:hover {
    background-color: rgba(250, 250, 250, 0.7);
    color: #000000;
  }
  &:active {
    box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%),
      0 8px 12px 6px rgb(60 64 67 / 15%);
    outline: none;
  }
  &:focus {
    outline: none;
    border: 7px solid rgba(170, 170, 170, 0.7);
  }
  &:not(:disabled) {
    box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
      rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
  }
  &:not(:disabled):hover {
    box-shadow: rgba(60, 64, 67, 0.3) 0 2px 3px 0,
      rgba(60, 64, 67, 0.15) 0 6px 10px 4px;
  }
  &:not(:disabled):focus {
    box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
      rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
  }
  &:not(:disabled):active {
    box-shadow: rgba(60, 64, 67, 0.3) 0 4px 4px 0,
      rgba(60, 64, 67, 0.15) 0 8px 12px 6px;
  }
  &:disabled {
    box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
      rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
  }
`;
export const NormalButton = styled.button`
  ${() => Button}
`;
export const AnchoredButton = styled.a`
  ${() => Button}
`;
