import React, { Children, useEffect, useState } from  "react"

const Context = React.createContext();

function ContextProvider({children}) {

    const [location, setLocation] = useState("");

    // Feacting the api

    let API_URL = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?`;
    const locations = `query=${location}`;

    if (location !== "") {
        API_URL = API_URL + locations
    }

    const locationWeather = async () => {
        try {
            const response = await fetch(API_URL)
            const data = await response.json()
            setLocation(data)
        } catch (e) {
            console.error(e);
        }
    }



    useEffect(() => {
         locationWeather()
    }, [location])

    return(
        <Context.Provider value={{location, setLocation}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}