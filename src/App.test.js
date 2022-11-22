import { render, screen } from "@testing-library/react";
import App from "./App";
import Login from "./components/Login";

describe("Test the App Component", () => {
  test("header renders in the document", () => {
    const component = render(<App />);
    const linkElement = component.getByText(/React Bootstrap Login Form/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("render login component in doucment", () => {
    const { getByLabelText } = render(<Login />);
    const childElement = getByLabelText("Email Address");
    expect(childElement).toBeTruthy();
  });
});