// components/PrivateRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../lib/auth';

export default function PrivateRoute() {
  const token = isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
  return Boolean(token);
}
