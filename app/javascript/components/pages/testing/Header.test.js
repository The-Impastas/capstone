import React from "react"
import Header from "./Header"
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

describe("<Header />", () => {
  it("renders without crashing", () => {
    render(
      <Header />
    );
    screen.logTestingPlaygroundURL()
    expect(screen.getByText(/PASTA/)).toBeInTheDocument()
  });
});