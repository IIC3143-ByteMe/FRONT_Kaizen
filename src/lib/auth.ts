export const getToken = () => {
  return localStorage.getItem('token')
}

function getEnv() {
  return (import.meta as any).env ?? (globalThis as any).__ENV ?? {}
}

export function isAuthenticated(): boolean {
  const useAuth = getEnv().VITE_USE_AUTH === 'true'
  if (!useAuth) return true
  const token = localStorage.getItem('token')
  return !!token
}

export function logout(): void {
  localStorage.removeItem('token')
}
export function login(token: string): void {
  localStorage.setItem('token', token)
}