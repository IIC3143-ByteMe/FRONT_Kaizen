import './Sidebar.css'
import { Link } from 'react-router-dom'
import LogoutButton from './LogoutButton';

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <h2>Admin</h2>
      <ul>
        <li>
          <Link to="/dashboard/users">Usuarios</Link>
        </li>
        <li>
          <Link to="/templates">Plantillas de Hábitos</Link>
        </li>
        <li>
          <Link to="/dashboard/analytics">Analytics</Link>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}
