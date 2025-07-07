import { getToken, login, logout, isAuthenticated } from '../auth';
import { describe, test, expect } from '@jest/globals';

describe('auth utilities', () => {
  beforeEach(() => {
    localStorage.clear();
    (globalThis as any).__ENV = { VITE_USE_AUTH: 'true' };
  });

  test('login stores token and getToken retrieves it', () => {
    login('abc');
    expect(getToken()).toBe('abc');
  });

  test('logout removes token', () => {
    login('abc');
    logout();
    expect(getToken()).toBeNull();
  });

  test('isAuthenticated returns true only when token exists', () => {
    expect(isAuthenticated()).toBe(false);
    login('token');
    expect(isAuthenticated()).toBe(true);
  });

  test('isAuthenticated ignores token when auth disabled', () => {
    (globalThis as any).__ENV = { VITE_USE_AUTH: 'false' };
    expect(isAuthenticated()).toBe(true);
  });
});
