import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import Input from "../components/home/Input";

test("test the Input component", () => {
  const setWordCountMock = jest.fn();
  const setCharacterCountMock = jest.fn();
  const setTextMock = jest.fn();

  render(
    <Input
      setWordCount={setWordCountMock}
      setCharacterCount={setCharacterCountMock}
      text="abc"
      setText={setTextMock}
    />
  );

  let input = screen.getByRole("textbox")as HTMLTextAreaElement;
  expect(input).toBeInTheDocument();

  input = screen.getByPlaceholderText(
    "Start typing, or copy and paste your document here..."
  ) as HTMLTextAreaElement;
  expect(input).toBeInTheDocument();

  expect(input.value).toBe("abc");
});
