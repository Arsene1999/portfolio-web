import styled from "styled-components";

export const AppContainer = styled.div`
  background-color: var(--background-color);
  opacity: 1;
  background-image: linear-gradient(135deg, #efd6c2 25%, transparent 25%),
    linear-gradient(225deg, #efd6c2 25%, transparent 25%),
    linear-gradient(45deg, #efd6c2 25%, transparent 25%),
    linear-gradient(315deg, #efd6c2 25%, #f2dece 25%);
  background-position: 40px 0, 40px 0, 0 0, 0 0;
  background-size: 40px 40px;
  background-repeat: repeat;
  display: "flex";
  justify-content: center;
  align-items: center;
  height: 100%;
`;
