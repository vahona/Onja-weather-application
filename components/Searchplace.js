
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

    const TypeLocation = weather.map((local) => {

      return (
        <div>
          <Container>
            <div>{local.weather_state_name}</div>
            <img src="https:://static/img/weather/png/t.png" />
            <div>{local.weather_state_abbr}</div>
            <div>{local.wind_direction_compass}</div>
            <div>
              <div>
                {Math.round(local.min_temp)}
                <sup> C</sup>
              </div>
              <div>
                {Math.round(local.max_temp)}
                <sup>C</sup>
              </div>
            </div>
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

    const timeToday = weather.map((today) => {
          // weather.length = 1

          return (
            <>
              <div>{today.humidity}</div>
            </>
          );
    })

    return (
      <>
        <div>
          <div> X </div>
          <form onSubmit={searchLocation}>
            <label></label>
            <input type="text" id="location" />
            <button>Search</button>
          </form>
        </div>
        <Table>
          <div>{locationweather}</div>
          <Tablegrid>{TypeLocation}</Tablegrid>
          <div></div>
        </Table>
        <h2> Today's Hightlight </h2>
        <div>{timeToday}</div>
       
      </>
    );
}

export default Searchplace
