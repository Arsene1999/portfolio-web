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
  max-width: 25rem;
  gap: 1rem;
`;

export const HomeSectionTitle = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  line-height: 1;
`;

export const HomeSectionSpan = styled.span`
  color: var(--dark-green);
`;

export const HomeSectionSub = styled.p`
  font-weight: 600;
  font-size: 1.1em;
`;

export const HomeSectionText = styled.p`
  font-weight: 400;
  font-size: 1em;

  span {
    font-weight: 700;
    font-style: italic;
  }
`;

export const HomeSectionAllingButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  gap: 12px;
  justify-content: center;
  padding-top: 1rem;
`;

export const HomeSectionButtons = styled.button`
  padding: 8px;
  background-color: var(--dark-green);
  color: var(--white);
  font-weight: 500;
  font-size: 0.875rem;
  border-radius: 16px;
  width: 100%;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(85%);
  }
`;
