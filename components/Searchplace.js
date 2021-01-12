

import React, { useContext } from "react";
import { Context } from "../Context";

function Searchplace() {
   const { location, setLocation, weather, setWeather } = useContext(Context);

    function searchLocation(e) {
        e.preventDefault()
        setLocation(e.target.location.value)
    }

    const TypeLocation = weather.map((local) => {
      return (
        <div>
          <div>{local.title}</div>
          <div>{local.woeid}</div>
          <div>{local.location_type}</div>
          <div>{local.latt_long}</div>
        </div>
      );
    });

    return (
      <div>
        <div> X </div>
        <form onSubmit={searchLocation}>
          <label></label>
          <input type="text" id="title" />
          <button>Search</button>
        </form>
        <input />
        <div>{TypeLocation}</div>
      </div>
    );
}

export default Searchplace
