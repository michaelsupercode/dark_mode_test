import { createContext, useState } from "react";

export const mainContext = createContext()

const MainProvider = ({ children }) => {
    const [mode, setMode] = useState(false)

    return (
        <mainContext.Provider value={{ mode, setMode }}>
            {children}
        </mainContext.Provider>
    )
}


export default MainProvider;
