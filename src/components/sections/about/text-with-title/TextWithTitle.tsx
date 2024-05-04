import { FC } from "react";
import { ITextWithTitle } from "./interfaces";
import {
  TextWithTitleWrapper,
  TextWithTitleWrapperText,
  Title,
} from "./styles";

const TextWithTitle: FC<ITextWithTitle> = ({ title, text }) => {
  return (
    <TextWithTitleWrapper>
      <Title>{title}</Title>
      <TextWithTitleWrapperText>{text}</TextWithTitleWrapperText>
    </TextWithTitleWrapper>
  );
};

export default TextWithTitle;
