import '../styles/Sidebar.css'
import { Link } from 'react-router-dom'
import LogoutButton from './LogoutButton';

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <h2>Panel de Administrador</h2>
      <ul>
        <li>
          <Link to="/templates">Plantillas de Hábitos</Link>
        </li>
        <li>
          <Link className="under-construction" to="/analytics">Estadísticas</Link>
        </li>
        <li>
          <Link className="under-construction" to="/users">Usuarios</Link>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}
