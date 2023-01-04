import styled from "styled-components";

interface InputPropsType {
  br?: string;
  width?: string;
  height?: string;
}
const Wrapper = styled.div`
  display: relative;
`;
const Input = styled.input<InputPropsType>`
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  border-radius: ${(p) => p.br};
  padding: 0 20px;
  border: none;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
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
