import { render, screen } from "@testing-library/react";
import Init from "./Init";

test("renders learn react link", () => {
  render(<Init />);
  //Test if  exist elements
  const header = screen.getByTestId("header");
  expect(header).toBeInTheDocument();

  const body = screen.getByTestId("body");
  expect(body).toBeInTheDocument();

  const footer = screen.getByTestId("footer");
  expect(footer).toBeInTheDocument();

  //Test if exist texts
  const textRating = screen.getByText(/Rating/i);
  expect(textRating).toBeInTheDocument();

  const textInformation = screen.getByText(/Information/i);
  expect(textInformation).toBeInTheDocument();
});
