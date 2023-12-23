import { Dispatch, FC, SetStateAction, useState } from "react";

type buttonGroupProps = {
  setText: Dispatch<SetStateAction<string>>;
  text: string;
};

const ButtonGroup: FC<buttonGroupProps> = ({ text, setText }) => {
  const [textCasing, setTextCasing] = useState("lower");
  const [copied, setCopied] = useState(false);

  const handleTextCase = () => {
    if (!text) return;
    if (textCasing === "lower") {
      setTextCasing("upper");
      setText(text.toUpperCase());
    } else {
      setTextCasing("lower");
      setText(text.toLowerCase());
    }
  };

  const handleClearExtraSpaces = () => {
    const wordsArray = text.split(/\s+/);
    const filteredArray = wordsArray.filter((word) => word !== "");
    setText(filteredArray.join(" "));
  };

  const handleClearText = () => {
    setText("");
  };

  const handleCopy = () => {
    if (copied || !text) return;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      });
    } else {
      alert("Clipboard API not supported");
    }
  };

  return (
    <div className="buttonsWrapper">
      <button
        data-tooltip-id="my-tooltip"
        data-tooltip-content={
          textCasing === "lower" ? "Change to Uppercase" : "Change to Lowercase"
        }
        onClick={handleTextCase}
      >
        {textCasing === "lower" ? "🔠" : "🔡"}
      </button>
      <button
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Clear Extra spaces"
        onClick={handleClearExtraSpaces}
      >
        ✨
      </button>
      <button
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Clear"
        onClick={handleClearText}
      >
        🧹️
      </button>
      <button
        data-tooltip-id="my-tooltip"
        data-tooltip-content={copied ? "Copied" :"Copy"}
        onClick={handleCopy}
      >
        🖨
      </button>
      <button data-tooltip-id="my-tooltip" data-tooltip-content="Undo">
        ↩️
      </button>
      <button data-tooltip-id="my-tooltip" data-tooltip-content="Redo">
        ↪️
      </button>
    </div>
  );
};

export default ButtonGroup;
