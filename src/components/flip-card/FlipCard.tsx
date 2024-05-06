import { FC } from "react";
import {
  FlipCardBack,
  FlipCardFront,
  FlipCardInner,
  FlipCardWrapper,
} from "./styles";
import { IFlipCard } from "./interface";

const FlipCard: FC<IFlipCard> = ({ Icon, text }) => {
  return (
    <FlipCardWrapper>
      <FlipCardInner>
        <FlipCardFront>
          <Icon height={"3rem"} width={"3rem"} />
        </FlipCardFront>
        <FlipCardBack>
          <h3>{text}</h3>
        </FlipCardBack>
      </FlipCardInner>
    </FlipCardWrapper>
  );
};

export default FlipCard;
