import { FC } from "react";

type wordCounterProps = {
  wordsCount: number;
  charactersCount: number;
};

const WordCounter: FC<wordCounterProps> = ({ wordsCount, charactersCount }) => {
  return (
    <div
      style={{
        fontSize: "28px",
        fontWeight: "bold",
        width:"fit-content",
        padding:"5px 10px",
        background: "aqua",
      }}
    >
      <span>{wordsCount} Words</span>
      <span> and </span>
      <span>{charactersCount} Characters</span>
    </div>
  );
};

export default WordCounter;
