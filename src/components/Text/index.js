import styled from "styled-components/macro";
import { css } from 'styled-components';

export const Text = styled.p`
  margin: 0;
  font-size: ${({ fontSize }) => fontSize ? fontSize : "12px"};
  font-weight: ${({ bold }) => bold ? "bold" : "normal"};
  color: ${({ color }) => color ? color : 'rgb(116,130,150)'};
  
  ${({ underline }) => underline && css`
    text-decoration: underline;
  `}
`;
