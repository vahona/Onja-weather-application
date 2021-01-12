import React, { Children, useEffect, useState } from  "react"

const Context = React.createContext();

function ContextProvider({children}) {
  const [location, setLocation] = useState("london");
  const [weather, setWeather] = useState([]);

  // Feacting the api

  let API_URL = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?`;
  const locations = `query=${location}`;

  // let API_URL2 = `https://cors-anywhere.herokuapp.com/https:www.metaweather.com/api/location/44418/`

  if (location !== "") {
    API_URL = API_URL + locations;
  }

  const locationWeather = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log("kkkk", data);
      setWeather(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    locationWeather();
  }, [location]);

  return (
    <Context.Provider value={{ location, setLocation, weather, setWeather }}>
      {children}
    </Context.Provider>
  );
}

export {ContextProvider, Context}