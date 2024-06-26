import styled from "styled-components";

export const PortraitWithBorder = styled.img`
  width: 300px;
  height: 300px;
  border: 15px solid var(--dark-green);
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 400px) {
    width: 250px;
    height: 250px;
  }
`;
