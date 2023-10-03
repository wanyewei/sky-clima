import React, { createContext, useEffect, useRef, useState } from "react";
import axios from "axios";

const WheatherDataContext = createContext(null);

export const WheatherDataProvider = ({ children }) => {
  const api_key = "735bfb123ee3fcc4b6b6a329630e0fc4";
  // const [searchInputValue, setSearchInputValue] = useState("");//目前不需要這設定
  const [searchSubmitValue, setSearchSubmitValue] = useState("台北");
  const [locationLat, setLocationLat] = useState(25);
  const [locationLon, setLocationLon] = useState(121);

  const searchRef = useRef(null);

  const url = {
    currentWheather(lat, lon) {
      return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`;
    },
    forecast(lat, lon) {
      return `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`;
    },
    airPollution(lat, lon) {
      return `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${api_key}`;
    },
    reverseGeo(lat, lon) {
      return `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${api_key}`;
    },

    //search query e.g.:"london"
    geo(query) {
      return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${api_key}`;
    },
  };

  const weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const getDate = (dateUnix, timezone) => {
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDay()},${monthName}`;
  };

  const getTime = (timeUnix, timezone) => {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minuts = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";
    return `${hours % 12 || 12}:${minuts} ${period}`;
  };

  const getHours = (timeUnix, timezone) => {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";
    return `${hours % 12 || 12} ${period}`;
  };

  const mps_to_kmh = (mps) => {
    const mph = mps * 3600;
    return mph / 1000;
  };

  const apiText = {
    1: {
      level: "good",
      messag: "Air quality is safety，and air pollution isn't risk.",
    },
    2: {
      level: " Fair",
      messag:
        "Air quality is acceptable;however for some pollution there may be a moderate health concern for a vary small number of people who are unusually sensitive to air pollution.",
    },

    3: {
      level: " Moderate",
      messag:
        "Members of sensitive  groups may experience health effects. The general public is not likely to be affected. ",
    },
    4: {
      level: " Poor",
      messag:
        "Everyone may begin to experience health effects; members os sensitive groups may experince more serious health effects.",
    },
    5: {
      level: " Very Poor",
      messag:
        "Health warnings of emergency conditions. The entire population  is more likely to be affected",
    },
  };

  // Search.js搜尋 Start... 裡面放有嘗試的寫法
  // const handleInputCHange = (e) => {
  //   setSearchInputValue(e.target.value);
  // };

  // //Search.js搜尋 ，form表單提交內容
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("提交的值", searchInputValue);
    // console.log("handleSubmit的值 : ", e.target.value);
    // setSearchSubmitValue(searchInputValue);
    // console.log(searchSubmitValue);
    // LocationSearch();
  };
  // console.log(searchSubmitValue);
  // console.log("提交的值", searchInputValue);
  // useEffect(() => {
  //   LocationSearch();
  // }, [searchInputValue]);

  const handleClick = () => {
    console.log(searchRef.current.value);
    setSearchSubmitValue(searchRef.current.value);
  };

  useEffect(() => {
    LocationSearch();
  }, [searchSubmitValue]);

  // Search.js搜尋  End ...

  //API處理 Start ...

  //尋找經緯度api

  const LocationSearch = async () => {
    // console.log("LocationSearch", searchSubmitValue);
    const LocationResult = await axios.get(url.geo(searchSubmitValue));
    const LocationResultDatas = LocationResult.data;
    const filterLocationSearch = LocationResultDatas.filter((data) => {
      return data.country === "TW";
    });
    console.log(filterLocationSearch[0]);
    setLocationLat(filterLocationSearch[0].lat);
    setLocationLon(filterLocationSearch[0].lon);
  };

  //開始尋找地區天氣

  // console.log("外部調用", LocationSearch.filterLocationSearch);
  //用經緯度尋找地方天氣資訊api...

  const WheatherSearch = async () => {
    console.log(locationLat, locationLon);
    let CurrentData = await axios.get(
      url.currentWheather(locationLat, locationLon)
    );

    let forecastData = await axios.get(
      "api.openweathermap.org/data/2.5/forecast?lat=25&lon=121&appid=735bfb123ee3fcc4b6b6a329630e0fc4"
    );
    //fetch
    // let WheatherCurrentDatas = fetch(url.currentWheather(22, 120)).then((res) => {
    //   const data = res.json();
    //   console.log(data);
    // });
    console.log("天氣結果(json格式)", CurrentData.data);
    console.log("天氣結果(json格式)", forecastData.data);
  };

  const airPollutions = async () => {
    let pollutionSearch = await axios.get(
      url.airPollution(locationLat, locationLon)
    );
    console.log("空汙結果(json格式)", pollutionSearch.data);
  };

  useEffect(() => {
    WheatherSearch();
    // airPollutions();
  }, [locationLat, locationLon]);

  //API處理 End ...

  return (
    <WheatherDataContext.Provider
      value={{
        WheatherSearch,
        // handleInputCHange,
        // searchInputValue,
        handleSubmit,
        searchRef,
        handleClick,
      }}
    >
      {children}
    </WheatherDataContext.Provider>
  );
};

export default WheatherDataContext;
