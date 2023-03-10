import styled from "styled-components";
import { breakpoints } from "universal/breakpoints/Breakpoint";
import { screeinBreakpoints } from "universal/breakpoints/displayBreakpoints";

interface InputPropsType {
  br?: string;
  width?: string;
  height?: string;
  mobile?: {};
  margin?: string;
}
const Wrapper = styled.div`
  display: relative;
`;
const Input = styled.input<InputPropsType>`
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  border-radius: ${(p) => p.br};
  margin: ${(p) => p.margin};
  padding: 0 20px;
  border: none;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
  &:focus {
    outline: none;
  }
  ${breakpoints("width", "px", [
    { [screeinBreakpoints.laptopS]: 250 },
    { [screeinBreakpoints.landscape]: 230 },
    { [screeinBreakpoints.tablet]: 200 },
    { [screeinBreakpoints.mobile]: 150 },
  ])};
`;
const Button = styled.button`
  position: absolute;
  all: unset;
  outline: none;
  cursor: pointer;
  background: #f3ba00;
  width: 112px;
  height: 58px;
  text-align: center;
  font-size: 16px;
  color: white;
  border-radius: 0px 10px 10px 0px;
`;
const TextArea = styled.textarea<InputPropsType>`
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  border-radius: ${(p) => p.br};
  ${breakpoints("width", "px", [
    { [screeinBreakpoints.laptopL]: 600 },
    { [screeinBreakpoints.laptopS]: 600 },
    { [screeinBreakpoints.landscape]: 550 },
    { [screeinBreakpoints.tablet]: 300 },
    { [screeinBreakpoints.mobile]: 200 },
  ])};
  &:focus {
    outline: none;
  }
  border: none;
  margin-top: 10px;
`;

const FormStyle = {
  Wrapper,
  Input,
  Button,
  TextArea,
};

export default FormStyle;
