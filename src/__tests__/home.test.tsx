import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../pages/Home";

test("Renders the home page", () => {
  render(<Home />);

  let input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: "Hello this is shiv" } });

  let wordCount = screen.getByText("4 Words");
  let charaterCount = screen.getByText("18 Characters");

  expect(wordCount).toBeInTheDocument();
  expect(charaterCount).toBeInTheDocument();

  fireEvent.change(input, {
    target: { value: "Hello\nWorld!\nThis is a test." },
  });

  wordCount = screen.getByText("6 Words");
  charaterCount = screen.getByText("26 Characters");

  expect(wordCount).toBeInTheDocument();
  expect(charaterCount).toBeInTheDocument();

  fireEvent.change(input, {
    target: { value: "    \n\n   " },
  });

  wordCount = screen.getByText("0 Words");
  charaterCount = screen.getByText("7 Characters");

  expect(wordCount).toBeInTheDocument();
  expect(charaterCount).toBeInTheDocument();

  fireEvent.change(input, {
    target: { value: "Hello this is    \n\n    test" },
  });

  wordCount = screen.getByText("4 Words");
  charaterCount = screen.getByText("25 Characters");

  expect(wordCount).toBeInTheDocument();
  expect(charaterCount).toBeInTheDocument();
});
