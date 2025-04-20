import React, { createContext, useEffect, useRef, useState } from "react";
import axios from "axios";

const WeatherDataContext = createContext(null);
const taiwanCityData = {
  台北: { en: "Taipei", lat: 25.033, lon: 121.5654 },
  新北: { en: "New Taipei", lat: 25.0169, lon: 121.4628 },
  桃園: { en: "Taoyuan", lat: 24.9937, lon: 121.3009 },
  台中: { en: "Taichung", lat: 24.1477, lon: 120.6736 },
  台南: { en: "Tainan", lat: 23.0, lon: 120.2269 },
  高雄: { en: "Kaohsiung", lat: 22.6273, lon: 120.3014 },
  基隆: { en: "Keelung", lat: 25.1276, lon: 121.7392 },
  新竹: { en: "Hsinchu", lat: 24.8138, lon: 120.9675 },
  嘉義: { en: "Chiayi", lat: 23.4801, lon: 120.4491 },
  彰化: { en: "Changhua", lat: 24.0685, lon: 120.5624 },
  南投: { en: "Nantou", lat: 23.913, lon: 120.685 },
  雲林: { en: "Yunlin", lat: 23.7092, lon: 120.4313 },
  苗栗: { en: "Miaoli", lat: 24.5602, lon: 120.8214 },
  宜蘭: { en: "Yilan", lat: 24.7021, lon: 121.7378 },
  花蓮: { en: "Hualien", lat: 23.9872, lon: 121.6015 },
  台東: { en: "Taitung", lat: 22.7554, lon: 121.1443 },
  屏東: { en: "Pingtung", lat: 22.5515, lon: 120.5487 },
  金門: { en: "Kinmen", lat: 24.4321, lon: 118.3171 },
  馬祖: { en: "Matsu", lat: 26.1608, lon: 119.9489 },
  澎湖: { en: "Penghu", lat: 23.5655, lon: 119.6151 },
};

export const WeatherDataProvider = ({ children }) => {
  const api_key = "735bfb123ee3fcc4b6b6a329630e0fc4";
  const google_api_key = "AIzaSyAUpr9cu8DhGoLcmRjx_GJYllx-v7b1eM0";
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [serchHistory, setSerchHistory] = useState([]);
  const [searchSubmitValue, setSearchSubmitValue] = useState("Taipei");
  const [translateValue, setTranslateValue] = useState(searchSubmitValue);
  const [locationLat, setLocationLat] = useState(25);
  const [locationLon, setLocationLon] = useState(121);
  const [cityName, setCityName] = useState("台北");
  const [currentWheather, setCurrentWheather] = useState({
    observationTime: "",
    locationName: searchSubmitValue,
    description: "",
    temperature: 0,
    visibility: 0,
    feels_like: 0,
    pressure: 0,
    humind: 0,
    sunRise: "",
    sunSet: "",
    icon: "",
  });
  const [pollution, setPollution] = useState({
    AirQuality: "",
    PM2_5: 0,
    SO2: 0,
    NO2: 0,
    O3: 0,
  });

  const [forecastDatas, setForecastDatas] = useState({
    timezone: 0,
    forecastList24: [],
  });

  const searchRef = useRef(null);

  const url = {
    languageTranslate() {
      return `https: //translation.googleapis.com/language/translate/v2?key=${google_api_key}`;
    },

    currentWheather(lat, lon) {
      return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`;
    },
    forecast(lat, lon) {
      return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`;
    },
    airPollution(lat, lon) {
      return `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`;
    },
    reverseGeo(lat, lon) {
      return `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${api_key}`;
    },

    //search query e.g.:"london"
    geo(query) {
      return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${api_key}`;
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

    return `${weekDayName} ${date.getUTCDate()},${monthName}`;
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

  const aqiText = {
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

  //Search.js搜尋 ，form表單提交內容
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };
  const handleInputFocus = () => {
    setIsInputOpen(true);
  };

  const handleClick = (e) => {
    e.preventDefault(); // 防止表單預設行為
    if (window.screen.width < 996 && isInputOpen === false) {
      setIsInputOpen(true);
    } else {
      handleSearch();
      setIsInputOpen(false);
    }
  };

  const handleSearch = () => {
    const searchText = searchRef.current.value?.trim();
    if (!searchText) return;

    language(searchText); // 執行查詢
    setSearchSubmitValue(searchText); // 僅做紀錄
    const updateSerchHistory = [...serchHistory, searchText];
    localStorage.setItem("serchHistory", JSON.stringify(updateSerchHistory));
  };

  //serchHistory
  useEffect(() => {
    try {
      const storedHistory = JSON.parse(localStorage.getItem("serchHistory"));
      if (storedHistory) {
        setSerchHistory(() => {
          const newStoredHistory = storedHistory.filter((item) => item !== "");
          const historySet = new Set(newStoredHistory);
          return Array.from(historySet);
        });
      }
    } catch (e) {
      console.log(e);
      alert(e);
    }
  }, [searchSubmitValue]);

  const handleHistoryClick = (historyItem) => {
    if (historyItem) {
      searchRef.current.value = historyItem;
      handleSearch();
    }
  };

  // Search.js搜尋  End ...

  //API處理 Start ...

  const language = async (serchText) => {
    const trimmedValue = serchText.trim();
    const cityInfo = taiwanCityData[trimmedValue];

    if (cityInfo) {
      console.log("✅ 對應成功：", cityInfo.en);
      // setTranslateValue(cityInfo.en);
      setLocationLat(cityInfo.lat);
      setLocationLon(cityInfo.lon);
      setCityName(trimmedValue);

      await LocationSearch(cityInfo.en); // 用正確的值查，不再依賴 translateValue
    } else {
      // setTranslateValue(trimmedValue);
      await LocationSearch(trimmedValue);
    }
  };
  //尋找經緯度api
  const LocationSearch = async (query) => {
    try {
      const LocationResult = await axios.get(url.geo(query));
      const LocationResultDatas = LocationResult.data;

      const filterLocationSearch = LocationResultDatas.filter(
        (data) => data.country === "TW"
      );

      if (filterLocationSearch.length > 0) {
        setCityName(
          filterLocationSearch[0].local_names?.zh || searchSubmitValue
        );
        setLocationLat(filterLocationSearch[0].lat);
        setLocationLon(filterLocationSearch[0].lon);
      } else {
        alert("找不到台灣的對應地點，請確認輸入是否正確");
      }
    } catch (e) {
      console.log(e);
      alert("地理位置查詢失敗");
    }
  };

  //開始尋找地區天氣

  //用經緯度尋找地方天氣資訊api...

  const WheatherSearch = async () => {
    let currentDatas = await axios.get(
      url.currentWheather(locationLat, locationLon)
    );
    const currentData = currentDatas.data;

    let forecastDatas = await axios.get(url.forecast(locationLat, locationLon));

    const forecastData = forecastDatas.data;
    console.log(forecastData);

    setCurrentWheather({
      ...currentWheather,
      observationTime: getDate(currentData.dt, currentData.timezone),
      description: currentData.weather[0].description,
      pressure: currentData.main.pressure,
      temperature: currentData.main.temp,
      visibility: currentData.visibility,
      humind: currentData.main.humidity,
      feels_like: currentData.main.feels_like,
      sunRise: getTime(currentData.sys.sunrise, currentData.timezone),
      sunSet: getTime(currentData.sys.sunset, currentData.timezone),
      icon: currentData.weather[0].icon,
    });
    setForecastDatas({
      timezone: forecastData.city.timezone,
      forecastList24: forecastData.list,
    });
  };

  //空汙搜尋
  const airPollutions = async () => {
    let pollutionSearch = await axios.get(
      url.airPollution(locationLat, locationLon)
    );
    const pollutionData = pollutionSearch.data;
    const aqiLevel = pollutionData.list[0].main.aqi;

    setPollution({
      AirQuality: aqiText[aqiLevel].level,
      PM2_5: pollutionData.list[0].components.pm2_5,
      SO2: pollutionData.list[0].components.so2,
      NO2: pollutionData.list[0].components.no2,
      O3: pollutionData.list[0].components.o3,
    });
  };

  //自動定位
  const locationName = async () => {
    const locationNames = await axios.get(
      url.reverseGeo(locationLat, locationLon)
    );
    const LocationResultDatas = locationNames.data;
    const filterLocationData = LocationResultDatas.filter((data) => {
      return data.country === "TW";
    });

    setCityName(filterLocationData[0].local_names.zh);
  };

  useEffect(() => {
    try {
      WheatherSearch();
      airPollutions();
      locationName();
    } catch (e) {
      console.log(e);
      alert(e);
    }
  }, [locationLat, locationLon]);

  //自動定位按鈕觸發
  const handleAutoLocation = () => {
    function successHandler(position) {
      console.log(position);
      setLocationLat(position.coords.latitude);
      setLocationLon(position.coords.longitude);
    }

    function errorHandler(err) {
      console.log(err);
      alert(err);
    }

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(successHandler, errorHandler, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      });
    } else {
      alert("你的裝置或瀏覽器不支援定位功能");
    }
  };

  //API處理 End ...

  return (
    <WeatherDataContext.Provider
      value={{
        handleInputFocus,
        isInputOpen,
        serchHistory,
        handleHistoryClick,
        handleAutoLocation,
        WheatherSearch,
        handleSubmit,
        searchRef,
        handleClick,
        cityName,
        pollution,
        currentWheather,
        forecastDatas,
        getHours,
        weekDayNames,
        monthNames,
      }}
    >
      {children}
    </WeatherDataContext.Provider>
  );
};

export default WeatherDataContext;
