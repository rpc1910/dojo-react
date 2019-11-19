import styled, { css } from "styled-components";

export const TaskList = styled.ul`
  list-style: none;
  margin-top: 50px;
`;

export const Task = styled.li`
  cursor: pointer;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 15px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  ${props =>
    props.done &&
    css`
      opacity: 0.5;
    `}
  span {
    color: green;
    font-weight: bold;
  }
`;
