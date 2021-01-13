
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
            <div>{local.weather_state_abbr}</div>
            <div>{local.wind_direction_compass}</div>
            <div>{local.min_temp}</div>
            <div>{local.max_temp}</div>
          </Container>
          
        </div>
      );
    });


    

   

    return (
      <Table>
        <div>
          <div> X </div>
          <form onSubmit={searchLocation}>
            <label></label>
            <input type="text" id="location" placeholder="london" />
            <button>Search</button>
          </form>
        </div>
        <Tablegrid>{TypeLocation}</Tablegrid>
        <h2>Today's Hightlight</h2>
        <div></div>
      </Table>
    );
}

export default Searchplace
