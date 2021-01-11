import React, { Children } from  "react"

const Context = React.createContext();

function ContextProvider({children}) {
    return(
        <Context.Provider>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}