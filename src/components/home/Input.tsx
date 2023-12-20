import { FC, Dispatch, SetStateAction, ChangeEvent,KeyboardEvent } from "react";

type inputProps = {
  setWordsCount: Dispatch<SetStateAction<number>>;
  setCharactersCount: Dispatch<SetStateAction<number>>;
};

const Input: FC<inputProps> = ({ setWordsCount, setCharactersCount }) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    if (value === "") {
      setWordsCount(0);
      setCharactersCount(0);
      return;
    }
    const wordsArray = value.match(/\b\w+\b/g) || [];
    setWordsCount(wordsArray.length);
    const charactersCount = value.replace(/[\n\r]/g, "").length;
    setCharactersCount(charactersCount);
  };

  return (
    <div>
      <textarea
        className="inputField"
        placeholder="Start typing, or copy and paste your document here...
        "
        style={{ whiteSpace: "pre-wrap" }} // Add this style
        // onKeyDown={handleEnterKey}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
