import { useEffect, useState } from "react";
import axios from "axios";

function usePetition(endpoint) {
    const API_URL = import.meta.env.VITE_API_URL

    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`${API_URL}${endpoint}`)
            .then((data) => {
                setData(data.data.data)
            })
            .catch((error) => {
                console.log(error);
            }).finally(() => {
                setLoading(false);
            })
    }, []);

    return [data, loading];
}

export default usePetition;