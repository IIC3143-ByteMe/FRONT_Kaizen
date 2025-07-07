import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button/Button'
import axios from 'axios'
import "../styles/Login.css"

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Completa todos los campos.')
      return
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
        email,
        password,
      })

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
    <>
    <div className="container">
      
      <h1 className='title'>KaizenApp</h1>
      <p className='bajada'>Panel de administradores</p>
      <form onSubmit={handleSubmit} className='form'>
        <input className='loginInput'
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input className='loginInput'
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button type="submit">
          Entrar
        </Button>
      </form>
    </div>
    </>
  );
}