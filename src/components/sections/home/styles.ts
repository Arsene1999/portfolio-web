import styled, { keyframes } from "styled-components";

export const HomeSectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  //width: 100vw;
  /* height: 100vh; */
  padding: 5rem 0 3rem;
`;

export const HomeSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  flex-wrap: wrap;
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

export const HomeSectionButtons = styled.a`
  padding: 8px;
  background-color: var(--dark-green);
  color: var(--white);
  font-weight: 500;
  font-size: 0.875rem;
  border-radius: 16px;
  width: 100%;
  transition: filter 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  text-decoration: none;
  &:hover {
    filter: brightness(85%);
    cursor: pointer;
  }
`;

const bouncing = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }

  50%{
    transform: translateY(-30px);
    opacity: 0.5;

  }
  
  100%{
    transform: translateY(0);
    opacity: 1 ;

  }
`;

export const HomeSectionBouncyDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  animation: ${bouncing} 3s ease-in-out infinite;

  padding-top: 30px;
  align-items: center;
`;
