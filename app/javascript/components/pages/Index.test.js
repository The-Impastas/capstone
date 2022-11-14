import { render, screen } from '@testing-library/react'
import MockData from '../MockData'
import Index from './Index'




describe("<Index />", () => {
    it("renders without crashing", () => {
      const div = document.createElement("div")
      render(<Index />, div)
    })
})

it("renders cards without crashing", () => {
    render(
      <BrowserRouter>
        <Index mockApartments={MockData} />
      </BrowserRouter>
    )
    MockData.forEach((pasta) => {
      const pastaname_of_pasta = screen.getByText(pasta.name_of_pasta)
      expect(pastaname_of_pasta).toBeInTheDocument()
    })
  })
