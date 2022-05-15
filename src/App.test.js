import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders All Coins header", () => {
  render(<App />);
  const headerElement = screen.getByText("All Coins");
  expect(headerElement).toBeInTheDocument();
});
