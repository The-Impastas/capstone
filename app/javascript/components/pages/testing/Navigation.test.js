import { render, screen } from "@testing-library/react"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import Navigation from "./Navigation"
import '@testing-library/jest-dom'


describe("<Navigation />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
      div
    )
  })
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    // screen.logTestingPlaygroundURL()
    
    expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /pastas/i })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /about us/i })).toBeInTheDocument()
   
    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument()
  })
})