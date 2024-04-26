import styled, { keyframes } from "styled-components";

export const blinkTextCursor = keyframes`
  from {border-right-color: var(--dark-green);}  to {border-right-color: transparent}`;

export const TypeWriterAnimationTextCursor = styled.span`
  border-right: 2px solid var(--dark-green);
  display: inline;

  /* A mágica acontece aqui */
  animation: ${blinkTextCursor} 0.7s steps(44) infinite normal;
`;

export const TypeWriterAnimationContainer = styled.p`
  display: inline-block;
  margin: 0;
`;
