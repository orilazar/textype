import React from "react";

export type CharacterStatus = "correct" | "incorrect" | "not-typed";

interface Props {
  status: CharacterStatus;
  character: string;
}

const CharacterTyped: React.FC<Props> = ({ status, character }) => {
  let backgroundColor = "transparent";
  let color = "#f2f2f2";
  if (status === "correct") {
    backgroundColor = "#99ff99";
    color = "#222";
  } else if (status === "incorrect") {
    backgroundColor = "#ff9999";
    color = "#222";
  }
  return (
    <span style={{ backgroundColor, color, padding: "1px" }}>{character}</span>
  );
};

export default CharacterTyped;
