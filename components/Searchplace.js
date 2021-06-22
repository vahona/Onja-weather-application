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
  LocationName,
  ButtonContainer,
  SubHeader,
  Airpress,
  ContainerToday,
  ImageToday,
  Today,
  Locatio,
  ImageNextDay,
  ButtonDegree,
  SearchCountry,

} from "../Style";

function Searchplace() {
  const {
    setLocation,
    weather,
    weatherDetail,
    setWeatherDetail,
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

  function weatherDetailButton(e) {
    setLocation(e.target.id)
  }

  const TypeLocation = weatherDetail?.slice(1).map((local) => {
    const todays = new Date();
    const tomorow = new Date(todays)
    tomorow.setDate(tomorow.getDate() + 1)
    return (
      <div key={local.id}>
        <Container>
          <div></div>
          <ImageNextDay
            src={`https://www.metaweather.com/static/img/weather/${local.weather_state_abbr}.svg`}
          />
          {/* <div>{local.wind_direction_compass}</div> */}
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


  const locationweather = weather.map((location) => {
    return (
      <>
        <div key={location.id}>
          <LocationName
            type="button"
            id={location.title}
            onClick={weatherDetailButton}
            key={location.id}
          >
            {location.title}
          </LocationName>
        </div>
      </>
    );
  });


  const timeToday = weatherDetail?.slice(0, 1).map((today) => {


    return (
      <Today key={today.id}>
        <ImageToday
          src={`https://www.metaweather.com/static/img/weather/${today.weather_state_abbr}.svg`}
        />
        <TodayDegree>
          {Math.round(today.max_temp)}
          <sup>ºC</sup>
        </TodayDegree>
        <div>{today.weather_state_name}</div>
        <div>Today: {Date.now()}</div>
        <Locatio>{weather[0].title}</Locatio>
      </Today>
    );
  });


  const windWeahter = weatherDetail?.slice(0, 1).map((wind) => {
    return (
      <TodayHightlight key={wind.id}>
        <Container2>
          <SubHeader>Wind status</SubHeader>
          <Speed>
            {Math.round(wind.wind_speed)} <SubSpeed> mph </SubSpeed>
          </Speed>
        </Container2>
        <Container2>
          <SubHeader>Humidity</SubHeader>
          <div>{wind.humidity}%</div>
          <progress id="file" max="100" value={wind.humidity}></progress>
        </Container2>
        <Smallcontainer>
          <Container2>
            <SubHeader>Visibility</SubHeader>
            <Visibility>
              {Math.round(wind.visibility)}
              <SubVisibility>miles</SubVisibility>
            </Visibility>
          </Container2>
        </Smallcontainer>
        <Smallcontainer>
          <Container2>
            <SubHeader> Air presseur </SubHeader>
            <Airpress > {wind.air_pressure} <sub>mb</sub> </Airpress>
          </Container2>
        </Smallcontainer>
      </TodayHightlight>
    );
  })



  return (
    <>
      <Table>
        <div>
          <SearchCountry>
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
                <div>
                  <div>{locationweather}</div>
                </div>
              </Container3>
            )}
          </SearchCountry>
          <ContainerToday>{timeToday}</ContainerToday>
        </div>
        <div>
          <div>
            <ButtonContainer>
              <ButtonDegree>ºC</ButtonDegree>
              <ButtonDegree>ºF</ButtonDegree>
            </ButtonContainer>
            <Tablegrid>{TypeLocation}</Tablegrid>
          </div>
          <Hightlight>
            <TodayHightlighttitle> Today's Hightlight </TodayHightlighttitle>
            <div>{windWeahter}</div>
          </Hightlight>
        </div>
      </Table>
    </>
  );
}

export default Searchplace;
