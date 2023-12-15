import { useContext } from 'react';
import './Menu.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext';

function Menu() {
    const navigation = useNavigate();
    const usuario = useContext(UserContext);

    return (
        <nav className="main-menu">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/criptomonedas">Lista de criptomonedas</NavLink></li>
                <li><NavLink to="/perfil">Perfil de {usuario.name}</NavLink></li>
                <li><a onClick={() => {
                    localStorage.removeItem("tokenEDmarket");
                    navigation("/login");
                }}>Cerrar sesion</a></li>
            </ul>
        </nav>
    )
}

export default Menu;
