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
    e.preventDefault();
    setLocation(e.target.location.value);
  }

  const TypeLocation = weather.slice(1).map((local) => {
      // const abbr = weather;
      // const abbreviation = `
    return (
      <div>
        <Container>
          <div>{local.weather_state_name}</div>
          <img
            src={`https://www.metaweather.com/static/img/weather/${local.weather_state_abbr}.svg`}
          />
          <div>{local.wind_direction_compass}</div>
          <div>
            <div>
              {Math.round(local.min_temp)}
              <sup> C</sup>
            </div>
            <div>
              {Math.round(local.max_temp)}
              <sup>ºC</sup>
            </div>
          </div>
        </Container>
      </div>
    );
  });

  const locationweather = weather.map((locationtitle) => {
    return (
      <>
        
        <div>{locationtitle.title}</div>
      </>
    );
  });

  const timeToday = weather.slice(0, 1).map((today) => {

    return (
      <>
        <img
          src={`https://www.metaweather.com/static/img/weather/${today.weather_state_abbr}.svg`}
        />
        <div>
          <div>
            {Math.round(today.min_temp)}
            <sup> C</sup>
          </div>
          <div>
            {Math.round(today.max_temp)}
            <sup>ºC</sup>
          </div>
        </div>
      </>
    );
  });


  const windWeahter = weather.slice(0, 1).map((wind) => {
    return (
      <div>
        <div>
          <h3>Wind status</h3>
          <div></div>
        </div>
        <div>
          <h3>Humidity</h3>
          <div>{wind.humidity}%</div>
          <label for="file">File progress:</label>

          <progress id="file" max="100" value={wind.humidity}>
            {" "}
            70%{" "}
          </progress>
        </div>
        <div>
          <h3>Visibility</h3>
          <div>{wind.visibility}</div>
        </div>
        <div>
          <h3>Air presseur</h3>
          <div>{wind.air_pressure}</div>
        </div>
      </div>
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
        <div>
          {timeToday} {locationweather}
        </div>
        <Tablegrid>{TypeLocation}</Tablegrid>
      </Table>
      <h2> Today's Hightlight </h2>
      <div>{windWeahter}</div>
    </>
  );
}

export default Searchplace;
