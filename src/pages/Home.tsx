import { useState } from "react";
import Input from "../components/home/Input";
import WordCounter from "../components/home/WordCounter";

const Home = () => {
  const [wordsCount, setWordsCount] = useState<number>(0);
  const [charactersCount, setCharactersCount] = useState<number>(0);

  return (
    <main
      style={{
        flexBasis: "90%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <WordCounter wordsCount={wordsCount} charactersCount={charactersCount} />
      <Input
        setWordsCount={setWordsCount}
        setCharactersCount={setCharactersCount}
      />
    </main>
  );
};

export default Home;
