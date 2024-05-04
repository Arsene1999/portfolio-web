import styled from "styled-components";

export const AboutSectionWrapper = styled.section`
  /* background-color: #84c979; */
  background-color: #127c02;
  opacity: 0.8;
  background-image: radial-gradient(#84c979 2px, #127c02 2px);
  background-size: 40px 40px;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 2rem 0 2rem;
  flex-direction: column;
  gap: 2rem;
`;

export const AboutSectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 2rem;
`;

export const AboutSectionTitle = styled.h1`
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: var(--white);
`;

export const AboutSectionFlipCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
  justify-content: center;
`;
