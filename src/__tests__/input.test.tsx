import '@testing-library/jest-dom'
import { fireEvent, render, screen } from "@testing-library/react";
import Input from "../components/home/Input";

test("test the Input component", () => {
  const setWordsCountMock = jest.fn();
  const setCharactersCountMock = jest.fn();

  render(
    <Input
      setWordsCount={setWordsCountMock}
      setCharactersCount={setCharactersCountMock}
    />
  );

  let input = screen.getByRole("textbox")as HTMLTextAreaElement;
  expect(input).toBeInTheDocument();

  input = screen.getByPlaceholderText(
    "Start typing, or copy and paste your document here..."
  ) as HTMLTextAreaElement;
  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: "abc" } });
  expect(input.value).toBe("abc");
});
