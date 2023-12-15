import axios from "axios";
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import './Login.css'

function Login() {
    const navigation = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState();

    function submit(e) {
        e.preventDefault();
        setCargando(true);
        setError(null);
        
        axios.post(`https://reqres.in/api/login`, user)
            .then((data) => {
                localStorage.setItem("tokenEDmarket", data.data.token);
                navigation("/");
            })
            .catch((err) => {
                console.error(err);
                setError(err.response.data.error);
            })
            .finally(() => setCargando(false))
    }

    if (localStorage.getItem("tokenEDmarket")) return <Navigate to="/" />

    return (
        <div className="login-container">
            <h1>Iniciar sesion</h1>
            <form onSubmit={submit}>
                <div className="field">
                    <label htmlFor="email">Correo Electronico</label>
                    <input onChange={(e) => {
                        setUser({ ...user, email: e.target.value })
                    }}
                        type="email"
                        name="email"
                        id="email"
                        required
                    />
                </div>
                <div className="field">
                    <label htmlFor="password">Contrasena</label>
                    <input onChange={(e) => {
                        setUser({ ...user, password: e.target.value })
                    }}
                        type="password"
                        name="password"
                        id="password"
                        required
                    />
                </div>
                <div className="submit">
                    <input
                        type="submit"
                        value={cargando ? "Cargando..." : "Ingresar"}
                        className="link"
                    />
                </div>
            </form>
            {
                error && <span className="error">Error: {error}</span>
            }
        </div>
    )
}

export default Login