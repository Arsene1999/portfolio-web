import React from "react";
import { styled } from "styled-components";
import ReactIcon from "../../assets/svg/ReactIcon";

const FlipCardWrapper = styled.div`
  background-color: transparent;
  width: 112px;
  height: 65px;
  perspective: 1000px;
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  ${FlipCardWrapper}:hover & {
    transform: rotateY(180deg);
  }
`;

const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--white);
  color: var(--dark-green);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--white);
  color: var(--dark-green);
  transform: rotateY(180deg);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FlipCard: React.FC = () => {
  return (
    <FlipCardWrapper>
      <FlipCardInner>
        <FlipCardFront>
          <ReactIcon width={"3rem"} height={"3rem"} />
        </FlipCardFront>
        <FlipCardBack>
          <h1>React</h1>
        </FlipCardBack>
      </FlipCardInner>
    </FlipCardWrapper>
  );
};

export default FlipCard;
