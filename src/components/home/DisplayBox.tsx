import { FC } from "react";

type DisplayBoxProps = {
  wordCount: number;
  characterCount: number;
};

const DisplayBox: FC<DisplayBoxProps> = ({ wordCount, characterCount }) => {
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
      <span>{wordCount} Words</span>
      <span> and </span>
      <span>{characterCount} Characters</span>
    </div>
  );
};

export default DisplayBox;
