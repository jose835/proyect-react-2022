import usePetition from "../hooks/usePetition";
import Cripto from "./cripto/Cripto";
import './Cuadricula.css'

function Cuadricula() {
  const [criptos, loading] = usePetition('assets');

  if (loading) return <span>Cargando...</span>

  return (
    <div className="app-container">
      <h1 className="body-title">Lista de <span className="body-title-span">criptomonedas</span></h1>

      <div className="cripto-container">
        {
          criptos && criptos.map(({ id, name, priceUsd, symbol, changePercent24Hr }) => (
            <Cripto
              key={id}
              id={id}
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
