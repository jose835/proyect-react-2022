import { useParams } from "react-router-dom";
import './CriptoPage.css'
import CriptoInfo from "./info/CriptoInfo";
import CriptoHistory from "./info/CriptoHistorial";
import usePetition from "../../hooks/usePetition";

function CriptoPage() {
    const params = useParams();

    const [cripto, loadingCripto] = usePetition(`assets/${params.id}`)
    const [history, loadingHistory] = usePetition(`assets/${params.id}/history?interval=d1`)

    if (loadingCripto || loadingHistory) return <span>Cargando...</span>

    return (
        <div className="cripto-page-container">
            {cripto && <CriptoInfo cripto={cripto} />}
            {history && <CriptoHistory history={history} />}
        </div>
    )

}

export default CriptoPage;
