import React from 'react'
import { render, screen } from '@testing-library/react'
import Edit from './Edit'
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom"
import '@testing-library/jest-dom/extend-expect'

describe("<Edit  />", () => {
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



  it("renders a edit page", () => {
    render(
      <MemoryRouter initialEntries={['/edit/1']}>
        <Routes>
          <Route path="/edit/:id" element={<Edit pastas={pastas} current_user={current_user} />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /Fill in the form to edit your pasta!/i })).toBeInTheDocument()

    screen.logTestingPlaygroundURL()
  })
  it("renders a form input title", () => {
    render(
      <MemoryRouter initialEntries={['/edit/1']}>
        <Routes>
          <Route path="/edit/:id" element={<Edit pastas={pastas} current_user={current_user} />} />
        </Routes>
      </MemoryRouter>
    );
    const element = expect(screen.getByText(/name of pasta \*/i)).toBeInTheDocument()
  })
  it("renders a form input title", () => {
    render(
      <MemoryRouter initialEntries={['/edit/1']}>
        <Routes>
          <Route path="/edit/:id" element={<Edit pastas={pastas} current_user={current_user} />} />
        </Routes>
      </MemoryRouter>
    );
    const element = (screen.getByText(/name of protein \*/i))
    expect(element).toBeInTheDocument()
  });
  it("renders a form input title", () => {
    render(
      <MemoryRouter initialEntries={['/edit/1']}>
        <Routes>
          <Route path="/edit/:id" element={<Edit pastas={pastas} current_user={current_user} />} />
        </Routes>
      </MemoryRouter>
    );
    const element = (screen.getByText(/name of sauce \*/i))
    expect(element).toBeInTheDocument()
  });
  it("renders a form input title", () => {
    render(
      <MemoryRouter initialEntries={['/edit/1']}>
        <Routes>
          <Route path="/edit/:id" element={<Edit pastas={pastas} current_user={current_user} />} />
        </Routes>
      </MemoryRouter>
    );
    const element = (screen.getByText(/name of beverage \*/i))
    expect(element).toBeInTheDocument()
  });
  it("renders a form input title", () => {
    render(
      <MemoryRouter initialEntries={['/edit/1']}>
        <Routes>
          <Route path="/edit/:id" element={<Edit pastas={pastas} current_user={current_user} />} />
        </Routes>
      </MemoryRouter>
    );
    const element = (screen.getByText(/name of cheese \*/i))
    expect(element).toBeInTheDocument()
  });
  it("has a clickable submit button", () => {
    render(
      <MemoryRouter initialEntries={['/edit/1']}>
        <Routes>
          <Route path="/edit/:id" element={<Edit pastas={pastas} current_user={current_user} />} />
        </Routes>
      </MemoryRouter>
    );
    const element = (screen.getByRole('button', { name: /submit pasta/i }))
    expect(element).toBeInTheDocument()
  });
});