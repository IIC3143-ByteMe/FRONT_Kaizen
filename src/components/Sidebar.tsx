import './Sidebar.css'
import LogoutButton from './LogoutButton';

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <h2>Admin</h2>
      <ul>
        <li><a href="/dashboard/users">Usuarios</a></li>
        <li><a href="/dashboard/habits">Plantillas de Hábitos</a></li>
        <li><a href="/dashboard/analytics">Analytics</a></li>
        <li><LogoutButton /></li>
      </ul>
    </nav>
  );
}
