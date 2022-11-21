import React from 'react'
import { render, screen } from '@testing-library/react'
import Edit from './Edit'
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom/extend-expect'

describe("<Edit  />", () => {
    // it("renders without crashing", () => {
    //     render(
    //         <BrowserRouter>
    //             <Edit />
    //         </BrowserRouter>
    //     );
    // });
    it("renders a heading", () => {
        render(
            <BrowserRouter>
                <Edit />
            </BrowserRouter>
        );
        const element = (screen.getByRole('heading', { name: /Edit your pasta here../i }))
        screen.logTestingPlaygroundURL()
        expect().toBeInTheDocument()
    })
});
//   it("renders a form input tite", () => {
//     render(
//       <BrowserRouter>
//          <Edit />
//       </BrowserRouter>
//     );
//     const element = (screen.getByText(/name of pasta \*/i))
//     expect(element).toBeInTheDocument()
//   });
//   it("renders a form input tite", () => {
//     render(
//       <BrowserRouter>
//          <Edit />
//       </BrowserRouter>
//     );
//     const element = (screen.getByText(/name of protein \*/i))
//     expect(element).toBeInTheDocument()
//   });
//   it("renders a form input tite", () => {
//     render(
//       <BrowserRouter>
//          <Edit />
//       </BrowserRouter>
//     );
//     const element = (screen.getByText(/name of sauce \*/i))
//     expect(element).toBeInTheDocument()
//   });
//   it("renders a form input tite", () => {
//     render(
//       <BrowserRouter>
//          <Edit />
//       </BrowserRouter>
//     );
//     const element = (screen.getByText(/name of beverage \*/i))
//     expect(element).toBeInTheDocument()
//   });
//   it("renders a form input tite", () => {
//     render(
//       <BrowserRouter>
//          <Edit />
//       </BrowserRouter>
//     );
//     const element = (screen.getByText(/name of cheese \*/i))
//     expect(element).toBeInTheDocument()
//   });
//   it("renders a form input tite", () => {
//     render(
//       <BrowserRouter>
//          <Edit />
//       </BrowserRouter>
//     );
//     const element = (screen.getByText(/link to recipe \*/i))
//     expect(element).toBeInTheDocument()
//   });
//   it("has a clickable submit button", () => {
//     render(
//       <BrowserRouter>
//          <Edit />
//       </BrowserRouter>
//     );
//     const element = (screen.getByRole('button', {name: /submit pasta/i}))
//     expect(element).toBeInTheDocument()
//   });