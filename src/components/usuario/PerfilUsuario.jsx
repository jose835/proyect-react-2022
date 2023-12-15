import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function PerfilUsuario() {
    const usuario = useContext(UserContext);
    return (
        <div>
            <h1>Perfil de {usuario.name}</h1>
            <div>
                Usuario desde el {usuario.registered}
            </div>
        </div>
    )
}

export default PerfilUsuario