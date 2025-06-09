import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './routes/Login'
import DashboardLayout from './routes/DashboardLayout'
import Users from './routes/Users'
import HabitTemplates from './routes/HabitTemplates'
import Analytics from './routes/Analytics'
import PrivateRoute from './components/PrivateRoute'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirige la raíz al login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Página de login */}
        <Route path="/login" element={<Login />} />

        {/* Rutas protegidas */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route path="users" element={<Users />} />
          <Route path="habits" element={<HabitTemplates />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
