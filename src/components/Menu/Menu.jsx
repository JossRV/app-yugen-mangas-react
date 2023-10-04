import { Link } from "react-router-dom"
import { Buscador } from "../Buscador/Buscador"

export const Menu = () => {
    return (
        <>
        {/* componente footer (barra de busqueda) */}
            <Buscador/>
            {/* navegacion con uso de router link */}
            <nav className="navbar navbar-expand bg-black">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link text-light">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to={'/comics'}>Comics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to={'/novelas'}>Novelas</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
