import { FC, useEffect, useState } from "react";
import {
  TypeWriterAnimationContainer,
  TypeWriterAnimationTextCursor,
} from "./styles";
import { ITypeWriterAnimation } from "./interfaces";

const TypeWriterAnimation: FC<ITypeWriterAnimation> = ({ value }) => {
  const [text, setText] = useState<string>("");

  const typeWriter = (text: string, length: number) => {
    return new Promise((resolve) => {
      let i = 0;
      const rowBack = () => {
        if (i !== 0) {
          setText(text.slice(0, i - 1));
          i--;
          setTimeout(rowBack, 200);
        } else {
          resolve(text);
        }
      };

      const type = () => {
        if (i < length) {
          setText(text.slice(0, i + 1));
          i++;
          setTimeout(type, 200);
        } else {
          rowBack();
        }
      };
      type();
    });
  };

  const typeStrings = async () => {
    for (const string of value) {
      await typeWriter(string, string.length);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    return;
  };

  const keepDoing = () => {
    typeStrings().then(() => {
      keepDoing();
    });
  };

  useEffect(() => {
    keepDoing();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TypeWriterAnimationContainer>
      {text}
      <TypeWriterAnimationTextCursor />
    </TypeWriterAnimationContainer>
  );
};

export default TypeWriterAnimation;
