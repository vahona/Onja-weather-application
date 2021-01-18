import React, { useContext } from "react";
import { Context } from "../Context";

import {
  Container,
  Container1,
  Container2,
  Container3,
  Degre,
  Table,
  Tablegrid,
  Hightlight,
  GrayDeg,
  TodayDegree,
  Speed,
  Visibility,
  SubSpeed,
  SubVisibility,
  BottomSearch,
  Input,
  Button,
  ButtonClose,
  Form,
  TodayHightlight,
  TodayHightlighttitle,
  Smallcontainer,
  
} from "../Style";

function Searchplace() {
  const {
    setLocation,
    weather,
    model,
    handleClick,
    isOpen,
    CloseSearch,
    isloadding,
    setIsloading,
    Loading,
    
  } = useContext(Context);



  function searchLocation(e) {
    e.preventDefault();
    setLocation(e.target.location.value);
  }



  const TypeLocation = weather.slice(1).map((local) => {

    return (
      <div key={local.id}>
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
        <div key={locationtitle.id}>{locationtitle.title}</div>
      </>
    );
  });


  const timeToday = weather.slice(0, 1).map((today) => {

    return (
      <Container1 key={today.id}>
        <img
          src={`https://www.metaweather.com/static/img/weather/${today.weather_state_abbr}.svg`}
        />
        <TodayDegree>
          {Math.round(today.max_temp)}
          <sup>ºC</sup>
        </TodayDegree>
        <div>{today.weather_state_name}</div>
        <div>Today: {Date.now()}</div>
        
      </Container1>
    );
  });


  const windWeahter = weather.slice(0, 1).map((wind) => {
    return (
      <TodayHightlight key={wind.id}>
        <Container2>
          <h3>Wind status</h3>
          <Speed>
            {Math.round(wind.wind_speed)} <SubSpeed> mph </SubSpeed>
          </Speed>
        </Container2>
        <Container2>
          <h3>Humidity</h3>
          <div>{wind.humidity}%</div>
          <progress id="file" max="100" value={wind.humidity}></progress>
        </Container2>
        <Smallcontainer>
          <Container2>
            <h3>Visibility</h3>
            <Visibility>
              {Math.round(wind.visibility)}
              <SubVisibility>miles</SubVisibility>
            </Visibility>
          </Container2>
        </Smallcontainer>
        <Smallcontainer>
          <Container2>
            
              <h3>Air presseur</h3>
              <div>{wind.air_pressure}</div>
            
          </Container2>
        </Smallcontainer>
      </TodayHightlight>
    );
  })

  return (
    <>
      <Table>
        <div>
          <div>
            <BottomSearch type="button" onClick={handleClick}>
              Search for places
            </BottomSearch>
            {model && (
              <Container3>
                <div>
                  <ButtonClose type="button" onClick={handleClick}>
                    X
                  </ButtonClose>
                  <Form onSubmit={searchLocation}>
                    <Input type="text" id="location" />
                    <Button>Search</Button>
                  </Form>
                </div>
                <div></div>
              </Container3>
            )}
          </div>
          <div>{timeToday}</div>
        </div>
        <div>
          <div>
            <div>{locationweather}</div>
          </div>
          <Tablegrid>{TypeLocation}</Tablegrid>
        </div>
        <Hightlight>
          <TodayHightlighttitle> Today's Hightlight </TodayHightlighttitle>
          <div>{windWeahter}</div>
        </Hightlight>
      </Table>
    </>
  );
}

export default Searchplace;
