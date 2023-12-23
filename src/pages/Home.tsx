import { useState } from "react";
import Input from "../components/home/Input";
import WordCounter from "../components/home/DisplayBox";

const Home = () => {
  const [wordCount, setWordCount] = useState<number>(0);
  const [characterCount, setCharacterCount] = useState<number>(0);

  return (
    <main
      style={{
        flexBasis: "90%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <WordCounter wordCount={wordCount} characterCount={characterCount} />
      <Input
        setWordCount={setWordCount}
        setCharacterCount={setCharacterCount}
      />
    </main>
  );
};

export default Home;
