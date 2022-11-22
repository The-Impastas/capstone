import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ProtectedIndex from "./ProtectedIndex";


describe("<ProtectedIndex />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <ProtectedIndex />
      </BrowserRouter>
    );
    screen.logTestingPlaygroundURL()
  });

  it("renders when user is logged in", () => {
    render(
      <BrowserRouter>
        <ProtectedIndex logged_in={true} />
      </BrowserRouter>
    );
    screen.getByRole('link', {
      name: /create a new pasta pairing/i
    })
    screen.getByRole('heading', {
      name: /your pasta pairings/i
    })
 
  });
  })