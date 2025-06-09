import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar' // Componente de navegación lateral
import './DashboardLayout.css' // Estilos CSS del layout

export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Sidebar /> {/* Barra lateral persistente */}
      <main className="dashboard-main">
        <Outlet /> {/* Renderiza las rutas hijas aquí */}
      </main>
    </div>
  )
}