import Sidebar from "../components/Sidebar";
import "../styles/OnlyInfoPages.css"

export default function NotFound() {
    return (
        <main>
        <Sidebar />
        <div className="container">
            <h1 className="title">Página no encontrada</h1>
            <p>Parece que estás buscando una página con una dirección equivocada, puedes volver al <a href="/login">inicio aquí</a> </p>
        </div>
        <div className="filler"> </div>
        </main>
    )
}