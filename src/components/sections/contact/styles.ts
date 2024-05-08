import { styled } from "styled-components";

export const ContactSectionWrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 2rem 0 2rem;
  flex-direction: column;
  gap: 2rem;
  padding-top: 70px;
`;

export const ContactSectionsTitle = styled.h1`
  font-size: 2.25rem;
  line-height: 2.5rem;
`;

export const ContactSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  align-items: center;

  @media (max-width: 450px) {
    width: 85%;
  }
`;

export const ContactSectionForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  align-items: center;
  max-width: 400px;
`;

export const ContactSectionInput = styled.input`
  border: 2px solid var(--dark-green);
  border-radius: 8px;
  padding: 0.5rem;
  width: 100%;

  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  color: inherit;
`;

export const ContactSectionTextarea = styled.textarea`
  border: 2px solid var(--dark-green);
  border-radius: 8px;
  padding: 0.5rem;
  max-width: 400px;
  width: 100%;
  height: 13rem;

  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  color: inherit;
`;

export const ContactSectionButton = styled.input`
  background-color: var(--dark-green);
  color: var(--white);
  border: none;
  border-radius: 24px;
  padding: 0.5rem 2rem;
  max-width: fit-content;
  transition: filter 0.5s ease;
  font-size: medium;
  font-weight: 600;
  align-self: flex-end;

  &:hover {
    filter: brightness(85%);
  }
`;
