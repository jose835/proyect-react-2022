import { useEffect, useState } from "react"
import axios from "axios";
import './App.css'

function App() {
  const API_URL = import.meta.env.VITE_API_URL

  const [criptos, setCriptos] = useState()

  useEffect(() => {
    axios.get(`${API_URL}assets`)
      .then((data) => {
        setCriptos(data.data.data);
      })
      .catch((error) => {
        console.error("La petición falló", error);
      });
  }, []);

  if (!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>Lista de criptmonedas</h1>
      <ol>
        {
          criptos.map(({ id, name, priceUsd }) => (
            <li key={id}>Nombre: {name} Precio: {priceUsd}</li>
          ))
        }
      </ol>
    </>
  )
}

export default App
