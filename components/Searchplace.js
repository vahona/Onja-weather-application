import React, { useContext } from "react";
import { Context } from "../Context";

import {
  Container,
  Container2,
  Degre,
  Table,
  Tablegrid,
  Hightlight,
  GrayDeg,
  TodayDegree,
} from "../Style";

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
          <Degre>
            <div>
              {Math.round(local.min_temp)}
              <sup>º C</sup>
            </div>
            <GrayDeg>
              {Math.round(local.max_temp)}
              <sup>ºC</sup>
            </GrayDeg>
          </Degre>
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
      <TodayDegree>
            {Math.round(today.max_temp)}
            <sup>ºC</sup>
        </TodayDegree>
      </>
    );
  });


  const windWeahter = weather.slice(0, 1).map((wind) => {
    return (
      <div>
        <Container2>
          <h3>Wind status</h3>
          <div></div>
        </Container2>
        <Container2>
          <h3>Humidity</h3>
          <div>{wind.humidity}%</div>
          <label for="file">File progress:</label>

          <progress id="file" max="100" value={wind.humidity}>
            {" "}
            70%{" "}
          </progress>
        </Container2>
        <Container2>
          <h3>Visibility</h3>
          <div>{wind.visibility}</div>
        </Container2>
        <Container2>
          <h3>Air presseur</h3>
          <div>{wind.air_pressure}</div>
        </Container2>
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
      <Hightlight>
        <h2> Today's Hightlight </h2>
        <div>{windWeahter}</div>
      </Hightlight>
    </>
  );
}

export default Searchplace;
