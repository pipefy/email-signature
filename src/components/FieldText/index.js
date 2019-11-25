import styled from "styled-components/macro";
import { FieldLabel } from "../FieldLabel";

export const FieldText = styled.input.attrs(props => ({
  type: "text",
}))`
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
