import styled from "styled-components";
import { IItemProps } from "./interface";

export const ItemNavBarLink = styled.a<IItemProps>`
  text-decoration: none;
  color: #000;
  font-weight: 400;
  height: 100%;
  border-bottom: 4px solid
    ${(props) => (props.active ? "#358f28" : "transparent")};
`;