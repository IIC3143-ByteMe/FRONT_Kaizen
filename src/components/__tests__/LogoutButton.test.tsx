import { fireEvent, render } from '@testing-library/react';
import LogoutButton from '../LogoutButton';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, jest } from '@jest/globals';


describe('LogoutButton', () => {
  it('clears token on click', () => {
    localStorage.setItem('token', 'abc');
    const { getByRole } = render(
      <MemoryRouter>
        <LogoutButton />
      </MemoryRouter>
    );
    fireEvent.click(getByRole('button'));
    expect(localStorage.getItem('token')).toBeNull();
  });
});
