import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './routes/Login'
import Users from './routes/Users'
import HabitTemplates from './routes/HabitTemplates'
import Analytics from './routes/Analytics'
import LandingPage from './routes/Landing'
import CreateHabitTemplate from './routes/CreateHabitTemplate'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />

        <Route path="/landing" element={<LandingPage />} />

        <Route path="/dashboard" />

        <Route path="/users" element={<Users />} />

        <Route path="/analytics" element={<Analytics />} />

        <Route path="/templates" element={<HabitTemplates />} />

        <Route path="/create-template" element={<CreateHabitTemplate />}/>
      </Routes>
    </BrowserRouter>
  )
}
