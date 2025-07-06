import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './routes/Login'
import Users from './routes/Users'
import HabitTemplates from './routes/HabitTemplates'
import Analytics from './routes/Analytics'
import LandingPage from './routes/Landing'
import CreateHabitTemplate from './routes/CreateHabitTemplate'
import DashboardLayout from './routes/DashboardLayout'
import PrivateRoute from './components/PrivateRoute'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/landing" element={<LandingPage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />} />
          <Route path="/users" element={<Users />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/templates" element={<HabitTemplates />} />
          <Route path="/create-template" element={<CreateHabitTemplate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
