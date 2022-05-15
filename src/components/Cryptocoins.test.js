import { render, screen } from "@testing-library/react";
import Cryptocoins from "./Cryptocoins";

test("renders Table header", () => {
  render(<Cryptocoins />);
  const headerElement = screen.getByText("Percentage Change");
  expect(headerElement).toBeInTheDocument();
});
