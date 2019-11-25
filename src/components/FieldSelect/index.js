import styled from "styled-components/macro";
import { FieldLabel } from "../FieldLabel";

export const FieldSelect = styled.select`
  border: 1px solid #c0d0e6;
  border-radius: 3px;
  caret-color: #3b5bfd;
  color: #213547;
  font-size: 14px;
  line-height: 1.4;
  padding: 0 10px;
  position: relative;
  width: 100%;
  height: 42px;
  z-index: 1;
  appearance: none;
  background-color: #fff;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3e%3cpath d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z' fill='%239babbe'/%3e%3c/svg%3e");
  background-size: 12px;
  background-repeat: no-repeat;
  background-position: right 10px center;
  
  :focus,
  :hover {
    border: 1px solid #3b5bfd;
    outline: 0;
  }
  
  :focus {
    box-shadow: 0 0 0 3px rgba(59,91,253,.1);
  }
  
  ${FieldLabel} > & {
    margin-top: 5px;
  }
`;
