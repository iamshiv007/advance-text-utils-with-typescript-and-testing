import { useState } from "react";
import Input from "../components/home/Input";
import WordCounter from "../components/home/DisplayBox";
import ButtonGroup from "../components/home/ButtonGroup";

const Home = () => {
  const [wordCount, setWordCount] = useState<number>(0);
  const [characterCount, setCharacterCount] = useState<number>(0);
  const [text, setText] = useState<string>("")

  return (
    <main
      style={{
        flexBasis: "90%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <WordCounter wordCount={wordCount} characterCount={characterCount} />
      <ButtonGroup text={text} setText={setText} />
      <Input
        setWordCount={setWordCount}
        setCharacterCount={setCharacterCount}
        text={text}
        setText={setText}
      />
    </main>
  );
};

export default Home;
