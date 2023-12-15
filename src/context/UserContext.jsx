import { createContext, useEffect, useState } from "react"

const UserContext = createContext();
const UserContextProvider = ({ children }) => {
    const [usuario, setUsuario] = useState({});

    useEffect(() => {
        setUsuario({
            name: 'Juanito Perez',
            registered: '15/Agosto/22'
        })
    }, [])

    return (
        <UserContext.Provider value={usuario}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }
