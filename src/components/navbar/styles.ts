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
  flex-direction: column;

  @media (max-width: 660px) {
    top: 0;
    border-radius: 0;
  }
`;

export const MainNavbarContainer = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`;

export const MainNavbarContainer2 = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  gap: 1rem;
  padding-top: 1rem;
  position: absolute;
  width: 100%;
  background-color: var(--white);
  top: 45px;
  left: 0;
  right: 0;
`;

export const MainNavbarAllign = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  width: 100%;
  justify-content: space-between;
`;

export const MainNavbarLogo = styled.a`
  font-size: large;
  font-weight: 600;
  font-style: normal;
  text-decoration: none;
  color: #000;
`;

export const MainNavbarButton = styled.button`
  background-color: var(--white);
  transition: filter 0.5s ease;
  cursor: pointer;
  color: var(--dark-green);
  border-radius: 8px;
  padding: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    filter: brightness(85%);
  }
`;
