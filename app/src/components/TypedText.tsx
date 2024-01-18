import React, { useRef, useState } from "react";
import CharacterTyped, { CharacterStatus } from "./CharacterTyped";

interface Props {
  text: string;
}

const TypedText: React.FC<Props> = ({ text }) => {
  const [writtenText, setWrittenText] = useState("");
  const [startTime, setStartTime] = useState(-1);
  const [wpm, setWpm] = useState(0);
  const [cpm, setCpm] = useState(0);

  let inputRef = useRef<HTMLInputElement>(null);

  const onFocused = () => {
    inputRef?.current?.focus();
  };

  const onInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWrittenText(e.target.value);
    if (writtenText.length === 0) {
      setStartTime(performance.now());
      console.log(startTime);
    }
    if (e.target.value === text) {
      const endTime = performance.now();
      const timeTaken = endTime - startTime;
      setWpm((text.split(" ").length / (timeTaken / 1000)) * 60);
      setCpm((text.length / (timeTaken / 1000)) * 60);
    }
  };

  return (
    <div onClick={onFocused}>
      <div>
        {text.split("").map((character: string, index: number) => {
          let status: CharacterStatus = "not-typed";
          if (writtenText[index] === text[index]) {
            status = "correct";
          } else if (
            writtenText[index] !== text[index] &&
            writtenText[index] !== undefined
          ) {
            status = "incorrect";
          }
          return (
            <CharacterTyped character={character} status={status} key={index} />
          );
        })}
      </div>
      <input
        ref={inputRef}
        type="text"
        value={writtenText}
        style={{ height: 0, width: 0, padding: 0, border: 0 }}
        onChange={onInputChanged}
      />
      {wpm > 0 && <h2>WPM: {Math.round(wpm)}</h2>}
      {cpm > 0 && <h2>CPM: {Math.round(cpm)}</h2>}
    </div>
  );
};

export default TypedText;
