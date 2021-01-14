
import React, { useContext } from "react";
import { Context } from "../Context";

import { Container, Table, Tablegrid } from "../Style";

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

    const TypeLocation = location && weather.map((local) => {
      return (
        <div>
          <Container>
            <div>{local.weather_state_name}</div>
            <div>{local.weather_state_abbr}</div>
            <div>{local.wind_direction_compass}</div>
            <div>
              {Math.round(local.min_temp)}
              <sup> C</sup>
            </div>
            <div>{local.max_temp}</div>
          </Container>
        </div>
      );
    });



    const locationweather = weather.map((locationtitle) => {
      return (
        <>
          <div>
            {locationtitle.title}
          </div>
        </>
      );
    })

    return (
      <>
        <Table>
          <div>
            <div> X </div>
            <form onSubmit={searchLocation}>
              <label></label>
              <input type="text" id="location" />
              <button>Search</button>
            </form>
          </div>
          <div>{locationweather}</div>
          <Tablegrid>{TypeLocation}</Tablegrid>
          <div></div>
        </Table>
        <h2>Today's Hightlight</h2>
      </>
    );
}

export default Searchplace
