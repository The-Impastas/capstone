import React from 'react'
import { render, screen } from '@testing-library/react'
import Index from './Index'
import '@testing-library/jest-dom'



describe("<Index />", () => {
    it("renders without crashing", () => {
      render(<Index />)
      expect(screen.getByText(/All Our Pasta Pairings/)).toBeInTheDocument()
    })
    it("renders text", () => {
      render(<Index />)
      expect(screen.getByText(/Rate this Recipe/)).toBeInTheDocument()
    })
});


