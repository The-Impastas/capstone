import { render, screen } from "@testing-library/react"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import Home from "./Home"
import '@testing-library/jest-dom'


describe("<Navigation />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
      div
    )
  })
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    // screen.logTestingPlaygroundURL()
    expect(screen.getByRole('link', { name: /view pastas/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /reviews/i })).toBeInTheDocument()
  })
})