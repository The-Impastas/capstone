import React from 'react'
import { render, screen } from '@testing-library/react'
import Show from './Show'
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom"
import '@testing-library/jest-dom/extend-expect'

describe("<Show  />", () => {
  let current_user = { id: 1 }
  let pastas = [{
    name_of_pasta: 'spaghett',
    sauce: 'bolognese',
    protein: 'chickens',
    beverage: 'booze',
    cheese: 'parm',
    recipe_link: 'www.www.ww.com.aweiofjaiowefj',
    image: 'www.image.com',
    user_id: 1,
    id: 1
  },
  {
    name_of_pasta: 'spaghett',
    sauce: 'bolognese',
    protein: 'chickens',
    beverage: 'booze',
    cheese: 'parm',
    recipe_link: 'www.www.ww.com.aweiofjaiowefj',
    image: 'www.image.com',
    user_id: 1,
    id: 2
  }]



  it("renders a show page", () => {
    render(
      <MemoryRouter initialEntries={['/show/1']}>
        <Routes>
          <Route path="/show/:id" element={<Show pastas={pastas} current_user={current_user} />} />
        </Routes>
      </MemoryRouter>
    );
    screen.logTestingPlaygroundURL()
    expect(screen.getByText(/name:/i)).toBeInTheDocument()
  })
  it("renders a show page", () => {
    render(
      <MemoryRouter initialEntries={['/show/1']}>
        <Routes>
          <Route path="/show/:id" element={<Show pastas={pastas} current_user={current_user} />} />
        </Routes>
      </MemoryRouter>
    );
    screen.logTestingPlaygroundURL()
    expect(screen.getByText(/sauce:/i)).toBeInTheDocument()
  })
  it("renders a show page", () => {
    render(
      <MemoryRouter initialEntries={['/show/1']}>
        <Routes>
          <Route path="/show/:id" element={<Show pastas={pastas} current_user={current_user} />} />
        </Routes>
      </MemoryRouter>
    );
    screen.logTestingPlaygroundURL()
    expect(screen.getByText(/protein:/i)).toBeInTheDocument()
  })
  it("renders a show page", () => {
    render(
      <MemoryRouter initialEntries={['/show/1']}>
        <Routes>
          <Route path="/show/:id" element={<Show pastas={pastas} current_user={current_user} />} />
        </Routes>
      </MemoryRouter>
    );
    screen.logTestingPlaygroundURL()
    expect(screen.getByText(/beverage:/i)).toBeInTheDocument()
  })
  it("renders a show page", () => {
    render(
      <MemoryRouter initialEntries={['/show/1']}>
        <Routes>
          <Route path="/show/:id" element={<Show pastas={pastas} current_user={current_user} />} />
        </Routes>
      </MemoryRouter>
    );
    screen.logTestingPlaygroundURL()
    expect(screen.getByText(/cheese:/i)).toBeInTheDocument()
  })
});
