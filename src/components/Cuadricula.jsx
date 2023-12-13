import { useEffect, useState } from "react"
import axios from "axios";
import Cripto from "./cripto/Cripto";
import './Cuadricula.css'

function Cuadricula() {
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
    <div className="app-container">
      <h1 className="body-title">Lista de <span className="body-title-span">criptomonedas</span></h1>

      <div className="cripto-container">
        {
          criptos.map(({ id, name, priceUsd, symbol, changePercent24Hr }) => (
            <Cripto
              key={id}
              name={name}
              priceUsd={priceUsd}
              symbol={symbol}
              changePercent24Hr={changePercent24Hr}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Cuadricula
