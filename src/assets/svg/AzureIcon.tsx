import * as React from "react";
import { IconInterface } from "./interface";

const AzureIcon: React.FC<IconInterface> = ({
  width = "1em",
  height = "1em",
}) => {
  return (
    <svg
      height={height}
      width={width}
      fill="currentColor"
      viewBox="0 0 59.242 47.271"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m32.368 0-17.468 15.145-14.9 26.75h13.437zm2.323 3.543-7.454 21.008 14.291 17.956-27.728 4.764h45.442z" />
    </svg>
  );
};

export default AzureIcon;
