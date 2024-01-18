import React, { useState } from "react";

interface Props {
  text: string;
}

const TypedText: React.FC<Props> = ({ text }) => {
  const [writtenText, setWrittenText] = useState("");
  return (
    <div>
      {text.split("").map((character: string, index: number) => {
        let backgroundColor = "transparent";
        if (writtenText[index] === text[index]) {
          backgroundColor = "green";
        } else if (
          writtenText[index] !== text[index] &&
          writtenText[index] !== undefined
        ) {
          backgroundColor = "red";
        }
        return (
          <span key={index} style={{ backgroundColor: backgroundColor }}>
            {character}
          </span>
        );
      })}
      <input
        type="text"
        value={writtenText}
        onChange={(e) => setWrittenText(e.target.value)}
      />
    </div>
  );
};

export default TypedText;
