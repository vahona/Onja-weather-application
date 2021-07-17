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
  NextDate,
  State,
  Progress,
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
    isCelsius,
    setIsCelsius
  } = useContext(Context);



  function searchLocation(e) {
    e.preventDefault();
    setLocation(e.target.location.value);
  }

  function weatherDetailButton(e) {
    setLocation(e.target.id)
  }

  function changeUnit(e) {
    console.log(e);
    setIsCelsius(false)

  }

  const date = Date.now()

  const realdate = new Date(date);


  // monthNames[d.getMonth()]

  // (fTemp - 32) * 5 / 9;

  const TypeLocation = weatherDetail?.slice(1).map((local) => {
    const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    // const dateMonthName = month_names_short[local.applicable_date.getMonth()]

    const todays = new Date();
    const tomorow = new Date(todays)
    const nextDay = tomorow.setDate(tomorow.getDate() + 1)
    return (
      <div key={local.id}>
        <Container>
          <NextDate> {local.applicable_date} </NextDate>
          <ImageNextDay
            src={`https://www.metaweather.com/static/img/weather/${local.weather_state_abbr}.svg`}
          />
          {/* <div>{local.wind_direction_compass}</div> */}
          <Degre>
            <div>
              {changeUnit
                ?
                <Degre>
                  <div>
                    {Math.round(local.min_temp)}
                    <sup>º C</sup>
                  </div>
                  <GrayDeg>
                    {Math.round(local.max_temp)}
                    <sup>
                      ºC
                    </sup>
                  </GrayDeg>
                </Degre> : <div> <div> {(Math.round(local.min_temp) - 32) * 5 / 9} <sup> ºF </sup> </div> <GrayDeg>
                  {(Math.round(local.max_temp) - 32) * 5 / 9}
                  <sup> ºF </sup>
                </GrayDeg>
                </div>}
            </div>
            {/* {Math.round(local.min_temp)}
              <sup>º C</sup>
            
            <GrayDeg>
              ${Math.round(local.max_temp)}
              <sup>ºC</sup>
            </GrayDeg> */}
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
    const date = Date.now();
    const realdate = new Date(date).toDateString()
    return (
      <Today key={today.id}>
        <ImageToday
          src={`https://www.metaweather.com/static/img/weather/${today.weather_state_abbr}.svg`}
        />
        <TodayDegree>
          {Math.round(today.max_temp)}
          <sup>ºC</sup>
        </TodayDegree>
        <State>{today.weather_state_name}</State>
        <div>Today: {realdate}</div>
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
          <Progress id="file" max="100" value={wind.humidity}></Progress>
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
                  <Form onSubmit={searchLocation} >
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
              <ButtonDegree onClick={changeUnit}>ºC</ButtonDegree>
              <ButtonDegree >ºF</ButtonDegree>
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
