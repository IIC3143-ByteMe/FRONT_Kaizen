import { useNavigate } from 'react-router-dom'

export default function LogoutButton() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <button onClick={handleLogout}>
      Cerrar sesión
    </button>
  )
}
// This LogoutButton component allows users to log out by removing the token from localStorage
// and redirecting them to the login page. It can be used in the DashboardLayout or any other component where a logout option is needed.   