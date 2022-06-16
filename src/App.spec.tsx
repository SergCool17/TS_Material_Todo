import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders elements", () => {
  render(<App />);

  expect(screen.getByRole("heading")).toHaveTextContent(/todos/);
  expect(screen.getByText(/todos/i)).toBeInTheDocument();
  expect(screen.getByText(/What needs to be done?/i)).toBeInTheDocument();
  expect(screen.getByText(/Тестовое задание/i)).toBeInTheDocument();

  expect(screen.getByText(/All/i)).toBeInTheDocument();
  expect(screen.getByText(/Active/i)).toBeInTheDocument();

  expect(screen.getByText(/All/i)).toBeInTheDocument();
  expect(screen.getByText(/Clear Completed/i)).toBeInTheDocument();
});
