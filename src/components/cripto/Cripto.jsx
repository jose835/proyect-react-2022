import "./Cripto.css"

function Cripto({ name, priceUsd, symbol, changePercent24Hr }) {
    return (
        <div className="cripto">
            <h2>{name}</h2>
            <div className="info">
                <p><span className="label">Precio: </span>${Number(priceUsd).toFixed(4)}</p>
                <p><span className="label">Codigo: </span>{symbol}</p>
                <p className={changePercent24Hr < 0 ? "disminucion" : "incremento"}>
                    <span className="label">Variacion 24hrs: </span>
                    {Number(changePercent24Hr).toFixed(3)}%
                </p>
            </div>
        </div>
    )
}

export default Cripto