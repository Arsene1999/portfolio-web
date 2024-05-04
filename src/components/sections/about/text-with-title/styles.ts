import { styled } from "styled-components";

export const TextWithTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: flex;
  align-items: center;

  @media (min-width: 908px) {
    max-width: 33%;
  }
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: var(--white);
`;

export const TextWithTitleWrapperText = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 1rem;
  text-align: center;
  color: var(--white);
`;
