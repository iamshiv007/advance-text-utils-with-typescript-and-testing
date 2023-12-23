import '@testing-library/jest-dom'
import { fireEvent, render, screen } from "@testing-library/react";
import Input from "../components/home/Input";

test("test the Input component", () => {
  const setWordCountMock = jest.fn();
  const setCharacterCountMock = jest.fn();

  render(
    <Input
      setWordCount={setWordCountMock}
      setCharacterCount={setCharacterCountMock}
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
