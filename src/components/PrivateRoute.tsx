import { Navigate } from 'react-router-dom'
import { isAuthenticated } from '../lib/auth'
import type { ReactNode } from 'react'

export default function PrivateRoute({ children }: { children: ReactNode }) {
  return isAuthenticated() ? children : <Navigate to="/login" />
}
