import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import WordCounter from "../components/home/WordCounter";

test("Renders the wordCounter component", () => {
  render(<WordCounter wordsCount={10} charactersCount={50} />);

  const wordCount = screen.getByText("10 Words")
  const characterCount = screen.getByText("50 Characters")

  expect(wordCount).toBeInTheDocument();
  expect(characterCount).toBeInTheDocument();
});