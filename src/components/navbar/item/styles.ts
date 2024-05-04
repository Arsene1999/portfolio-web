import styled from "styled-components";
import { IItemProps } from "./interface";

export const ItemNavBarLink = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: 400;
  height: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
`;

export const ItemNavBarContainer = styled.li<IItemProps>`
  border-bottom: 4px solid
    ${(props) => (props.active ? "#358f28" : "transparent")};
  transition: border-bottom 0.3s ease;
  opacity: ${(props) => (props.active ? 1 : 0.5)};

  &:hover {
    opacity: 1;
  }
`;
