import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import { describe, it, expect } from '@jest/globals';


describe('PrivateRoute', () => {
  it('renders outlet when authenticated', () => {
    (globalThis as any).__ENV = { VITE_USE_AUTH: 'true' };
    localStorage.setItem('token', 'abc');
    const { getByText } = render(
      <MemoryRouter initialEntries={['/protected']}>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/protected" element={<div>secret</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
    expect(getByText('secret')).toBeInTheDocument();
  });

  it('redirects to login when not authenticated', () => {
    (globalThis as any).__ENV = { VITE_USE_AUTH: 'true' };
    localStorage.removeItem('token');
    const { container } = render(
      <MemoryRouter initialEntries={['/protected']}>
        <Routes>
          <Route path="/login" element={<div>login</div>} />
          <Route element={<PrivateRoute />}>
            <Route path="/protected" element={<div>secret</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
    expect(container.innerHTML).toContain('login');
  });
});
