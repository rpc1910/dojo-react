import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: row;
`;

export const Input = styled.input`
  flex: 1;
  padding: 15px;
  border-radius: 10px 0 0 10px;
  border: 1px solid #ccc;
  border-right: none;
`;

export const Button = styled.button`
  width: 100px;
  border-radius: 0 10px 10px 0;
  border: 1px solid #ccc;
  border-left: none;
  background: green;
  color: #fff;
  cursor: pointer;
`;
