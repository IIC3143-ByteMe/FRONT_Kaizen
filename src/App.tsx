import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './routes/Login'
import Users from './routes/Users'
import HabitTemplates from './routes/HabitTemplates'
import Analytics from './routes/Analytics'
import CreateHabitTemplate from './routes/CreateHabitTemplate'
import DashboardLayout from './routes/DashboardLayout'
import NotFound from './routes/NotFound'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

          <Route element={<DashboardLayout />}>
            <Route index element={<Navigate to="/login" replace />} />

            <Route path="/dashboard" element={<HabitTemplates />} />
            <Route path="/users" element={<Users />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/templates" element={<HabitTemplates />} />
            <Route path="/create-template" element={<CreateHabitTemplate />} />
          </Route>

        {/* 404 opcional */}
        {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </HashRouter>
  )
}
