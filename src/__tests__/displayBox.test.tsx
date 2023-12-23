import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import DisplayBox from "../components/home/DisplayBox";

test("Renders the wordCounter component", () => {
  render(<DisplayBox wordCount={10} characterCount={50} />);

  const wordCount = screen.getByText("10 Words")
  const characterCount = screen.getByText("50 Characters")

  expect(wordCount).toBeInTheDocument();
  expect(characterCount).toBeInTheDocument();
});