import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './routes/Login'
import Users from './routes/Users'
import HabitTemplates from './routes/HabitTemplates'
import Analytics from './routes/Analytics'
import CreateHabitTemplate from './routes/CreateHabitTemplate'
import DashboardLayout from './routes/DashboardLayout'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        {/* públicas */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

        {/* protegidas */}
        {/* <Route element={<PrivateRoute />}> */}
          {/* layout común para todo lo privado */}
          <Route element={<DashboardLayout />}>
            {/* index → redirige al dashboard */}
            <Route index element={<Navigate to="/login" replace />} />

            {/* rutas hijas */}
            <Route path="/dashboard" element={<Analytics />} /> {/* o tu ComponenteDashboard */}
            <Route path="/users" element={<Users />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/templates" element={<HabitTemplates />} />
            <Route path="/create-template" element={<CreateHabitTemplate />} />
          </Route>
        {/* </Route> */}

        {/* 404 opcional */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </HashRouter>
  )
}
