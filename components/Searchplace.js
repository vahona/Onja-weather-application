
import React, { useContext } from "react";
import { Context } from "../Context";

function Searchplace() {
   const {
     location,
     setLocation,
     weather,
     setWeather,
     locationWoeid,
     setLocationWoeid,
   } = useContext(Context);

    function searchLocation(e) {
        e.preventDefault()
        setLocation(e.target.location.value)
    }

    const TypeLocation = weather.map((local) => {
      return (
        <div>
          <div>{local.weather_state_name}</div>
          <div>{local.weather_state_abbr}</div>
          <div>{local.wind_direction_compass}</div>
        </div>
      );
    });

   

    return (
      <div>
        <div> X </div>
        <form onSubmit={searchLocation}>
          <label></label>
          <input type="text" id="location" />
          <button>Search</button>
        </form>
        <div>{TypeLocation}</div>
      </div>
    );
}

export default Searchplace
