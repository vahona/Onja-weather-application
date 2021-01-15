import React, { Children, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [location, setLocation] = useState("london");
  const [locationWoeid, setLocationWoeid] = useState("44418");
  const [weather, setWeather] = useState([]);
  const [model, setModel] = useState(false);
  const [isOpen, setIsOpen] = useState(true)

  // Feacting the api

  let API_URL = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?`;
  const locations = `query=${location}`;

  let API_URL2 = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/`;
  const woeidLocation = `${locationWoeid}/`;

  if (location !== "") {
    API_URL = API_URL + locations;
  }

  if (locationWoeid !== "") {
    API_URL2 = API_URL2 + woeidLocation;
  }
  

  const locationWoeidWeather = async () => {
    try {
      const responses = await fetch(API_URL2);
      const datas = await responses.json();
      console.log(datas);
      setWeather(datas.consolidated_weather);
    } catch (e) {
      console.error(e);
    }
  };

  const locationWeather = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setWeather(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    locationWeather();
  }, [location]);

  useEffect(() => {
    weather?.map((weather) => setLocationWoeid(weather.woeid));
    // const cityWoeid = weather?.woeid;
    // setLocationWoeid(cityWoeid);
  }, [weather]);
 

  useEffect(() => {
    locationWoeidWeather();
  }, [locationWoeid]);





  function handleClick() {
    setModel(!model)
    console.log(model)
  }


  function CloseSearch() {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  return (
    <Context.Provider
      value={{
        location,
        setLocation,
        weather,
        setWeather,
        locationWoeid,
        setLocationWoeid,
        model,
        setModel,
        handleClick,
        isOpen,
        setIsOpen,
        CloseSearch,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
