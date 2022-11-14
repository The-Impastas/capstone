import React from "react"
import { render } from "@testing-library/react"
import Show from "./Show"

describe("<Show />", () => {
    it("renders without crashing", () => {
      const div = document.createElement("div")
      render(<Show />, div)
    })
  })