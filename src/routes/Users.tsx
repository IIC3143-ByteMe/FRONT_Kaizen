import "../styles/OnlyInfoPages.css"

export default function Users() {
  return (
    <div className="container">
      <h1 className="title">Gestión de Usuarios</h1>
      <p>Esta página está bajo <b>construcción</b> para la release v2.0 🔨</p>
      <p className="next-features">Próximas features sobre gestión de usuarios:</p>
      <ul className="features-list">
        <li>Ver nombres, número de hábitos y fecha de creación de todos los usuarios</li>
        <li>Poder eliminar usuarios en caso de necesitar suspender una cuenta</li>
      </ul>
    </div>
  )
  
}