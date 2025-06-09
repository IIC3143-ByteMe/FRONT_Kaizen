import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('') // Estado para el correo electrónico
  const [password, setPassword] = useState('') // Estado para la contraseña
  const [error, setError] = useState('') // Estado para mensajes de error

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Completa todos los campos.') // Validación básica
      return
    }

    try {
      // Llamada al endpoint de login con los datos ingresados
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
        email,
        password,
      })

      // Si es exitoso, guardar el token en localStorage
      const token = response.data.access_token
      localStorage.setItem('token', token)
      console.log('Inicio de sesión exitoso')

      // Redirigir al dashboard
      navigate('/dashboard')
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('Error en inicio de sesión:', err.message)
      } else {
        console.error('Error desconocido en inicio de sesión')
      }
      setError('Credenciales inválidas o error del servidor')
    }
  }

  return (
    <div className="login-page">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mostrar error si existe */}
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}