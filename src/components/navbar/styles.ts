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
  width: 100%;
  max-width: 600px;
  border: 1px solid #adadad;
  border-radius: 8px;
  padding: 12px 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  background-color: #fff;
`;

export const MainNavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const MainNavbarLogo = styled.a`
  font-size: large;
  font-weight: 600;
  font-style: normal;
  text-decoration: none;
  color: #000;
`;
