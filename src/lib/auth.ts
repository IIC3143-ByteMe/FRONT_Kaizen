export const getToken = () => {
  return localStorage.getItem('token')
}

// src/lib/auth.ts
export function isAuthenticated(): boolean {
  const useAuth = import.meta.env.VITE_USE_AUTH === 'true'
  if (!useAuth) return true // Si está desactivada la auth, siempre retorna true
  const token = localStorage.getItem('token')
  return !!token
}

export function logout(): void {
  localStorage.removeItem('token')
}
export function login(token: string): void {
  localStorage.setItem('token', token)
}