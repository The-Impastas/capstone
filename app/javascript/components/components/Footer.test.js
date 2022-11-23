import React from "react"
import Footer from "./Footer"
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

describe("<Footer />", () => {
  it("renders without crashing", () => {
    render(
      <Footer />
    );
    screen.logTestingPlaygroundURL()
    expect(screen.getByText(/Lovingly Created by The Impastas, LLC 2022 ©/)).toBeInTheDocument()
  });
});