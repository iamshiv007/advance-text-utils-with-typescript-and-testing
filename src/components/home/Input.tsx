import { FC, Dispatch, SetStateAction, ChangeEvent } from "react";

type inputProps = {
  setWordCount: Dispatch<SetStateAction<number>>;
  setCharacterCount: Dispatch<SetStateAction<number>>;
  text:string;
  setText:Dispatch<SetStateAction<string>>;
};

const Input: FC<inputProps> = ({ setWordCount, setCharacterCount, text, setText }) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setText(value)
    if (value === "") {
      setWordCount(0);
      setCharacterCount(0);
      return;
    }
    const wordsArray = value.match(/\b\w+\b/g) || [];
    setWordCount(wordsArray.length);
    const charactersCount = value.replace(/[\n\r]/g, "").length;
    setCharacterCount(charactersCount);
  };

  return (
    <div>
      <textarea
        className="inputField"
        placeholder="Start typing, or copy and paste your document here...
        "
        onChange={handleChange}
        value={text}
      />
    </div>
  );
};

export default Input;
