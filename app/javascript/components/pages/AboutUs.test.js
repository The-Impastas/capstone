import React from "react"
import AboutUs from "./AboutUs"
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

describe("<AboutUs />", () => {
  it("renders without crashing", () => {
    render(
      <AboutUs />
    );
    screen.logTestingPlaygroundURL()
    expect(screen.getByText(/Nate Ross/)).toBeInTheDocument()
  });
  it("renders without crashing", () => {
    render(
      <AboutUs />
    );
    screen.logTestingPlaygroundURL()
    expect(screen.getByText(/Heath Haupt/)).toBeInTheDocument()
  });
  it("renders without crashing", () => {
    render(
      <AboutUs />
    );
    screen.logTestingPlaygroundURL()
    expect(screen.getByText(/Christian Macias/)).toBeInTheDocument()
  });
  it("renders without crashing", () => {
    render(
      <AboutUs />
    );
    screen.logTestingPlaygroundURL()
    expect(screen.getByText(/Alyssa Martin/)).toBeInTheDocument()
  });
});