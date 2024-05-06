import styled from "styled-components";

export const MainNavbarWrapper = styled.div`
  display: flex;
  position: sticky;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 10px;
  text-align: center;
  max-width: 1000px;
  border-radius: 8px;
  padding: 12px 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  background-color: #fff;
  z-index: 10;
`;

export const MainNavbarContainer = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`;

export const MainNavbarLogo = styled.a`
  font-size: large;
  font-weight: 600;
  font-style: normal;
  text-decoration: none;
  color: #000;
`;
