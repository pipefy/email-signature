import styled from "styled-components/macro";

export const Button = styled.button`
  transition: all .2s ease-in-out;
  background: #3b5bfd;
  border: 0;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  padding: 11px 35px;
  
  :hover {
    background-color: rgba(59,91,253,.8);
  }
  
  :focus {
    outline: none;
    background-color: rgba(59,91,253,.8);
    box-shadow: 0 0 0 3px rgba(59,91,253,.25);
  }
`;
