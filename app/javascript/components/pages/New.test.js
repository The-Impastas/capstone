import React from 'react'
import { render, screen } from '@testing-library/react'
import MockData from '../MockData'
import New from './New'
import {BrowserRouter} from "react-router-dom"

describe("<New />", () => {
    it("renders without crashing", () => {
      const div = document.createElement("div")
      render(<New />, div)
    })
})


