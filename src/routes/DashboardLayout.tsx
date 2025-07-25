import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import '../styles/DashboardLayout.css'

export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <Outlet />
      </main>
    </div>
  )
}