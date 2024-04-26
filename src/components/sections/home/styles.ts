import styled from "styled-components";

export const HomeSectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const HomeSectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const HomeSectionTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const HomeSectionTitle = styled.h1`
  font-weight: 700;
  font-size: 3rem;
`;

export const HomeSectionSpan = styled.span`
  color: #279c16;
`;

export const HomeSectionSub = styled.p`
  font-weight: 600;
  font-size: 1.5rem;
`;
