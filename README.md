# skyClima

提供你查詢全台灣的天氣預報及空氣品質等訊息

---

#### \*Mobile

![image](https://github.com/wanyewei/sky-clima/assets/122330163/b8191344-a947-4058-96c4-83a993ef0718)

#### \*RWD

![image](https://github.com/wanyewei/sky-clima/assets/122330163/b3fd1c64-dae7-4042-88e2-031e966f235a)![image](https://github.com/wanyewei/sky-clima/assets/122330163/994b4efa-09a9-41a3-8db0-7092e78127fd)

#### \* 功能

###### 1.基本功能

- 能知道全台灣當天及未來五天的天氣預報
- 顯示當天的空氣品質，包括 AQI(空氣品質指數)等訊息
- 顯示當日的濕度、氣壓、能見度和體感溫度
- 使用者輸入中文會自動在內部翻譯為英文，提高搜尋精準度
- 當螢幕寬度小於 996px 時，使用者點擊搜尋圖示就可以展開搜尋框進行搜尋

###### 2.定位功能

- 使用者點擊定位按鈕可以顯示找到目前的位置

###### 3.搜尋功能

- 使用者可以輸入想查看的台灣地區，將資料顯示出來
- 使用者可以點擊搜尋框可以顯示當初的搜尋紀錄
- 使用者點擊搜尋紀錄內的任一筆會顯示該筆紀錄的資料

---

#### 資料夾結構

sky-clima/
├── README.md
├── package.json
├── public/
│ ├── index.html
│ ├── favicon.ico
│ ├── manifest.json
│ ├── robots.txt
├── src/
│ ├── components/
│ │ ├── header/
│ │ │ ├── CurrentLocation.js
│ │ │ ├── Search.js
│ │ ├── homepage/
│ │ │ ├── WeatherCard.js
│ │ │ ├── WeatherDetail.js
│ │ ├── layout/
│ │ │ ├── DefaultLayout.js
│ │ │ ├── Header.js
│ │ │ ├── SideMenus.js
│ │ ├── TodaysHilights/
│ │ │ ├── AirQuality.js
│ │ │ ├── OtherData.js
│ │ │ ├── SunRiseSet.js
│ │ ├── WheatherCard/
│ │ │ ├── FutureCard.js
│ │ │ ├── TodayCard.js
│ │ ├── WeatherDetail/
│ │ │ ├── TodayAt.js
│ │ │ ├── TodaysHighlights.js
│ ├── helpers/
│ │ ├── WeatherData.js
│ ├── images/
│ │ ├── Data.svg
│ │ ├── FeelsLike.svg
│ │ ├── Home.svg
│ │ ├── Humidty.svg
│ │ ├── Location.svg
│ │ ├── Logo.svg
│ │ ├── Pressure.svg
│ │ ├── Search.svg
│ │ ├── SearchLocation.svg
│ │ ├── Sun.svg
│ │ ├── Sunrise.svg
│ │ ├── Sunset.svg
│ │ ├── Visibility.svg
│ │ ├── WindDirection.svg
│ │ ├── Wind.svg
│ ├── props/
│ │ ├── Theme.js
│ ├── App.js
│ ├── App.test.js
│ ├── Homepage.js
│ ├── index.js
│ ├── reportWebVitals.js
│ ├── setupTest.js
│ ├── .gitnore
│ ├── package-lock.json
│ ├── package.json
│ ├── README.md
├── node_modules/

#### ＊開始使用：

##### Clone the project:

    git clone https://github.com/wanyewei/sky-clima.git

##### install:

    npm install

##### run the project:

    npm run start

---

#### 第三方 API

- OpenWeatherMap API
- Microsoft Translator Text API

#### ＊開發工具：

- react @18.2.0
- react-dom @@18.2.0
- react-router-dom @6.16.0
- styled-components @6.0.8
- axios @1.5.1
- web-vitals @2.1.4
- jest @27.5.1
- babel @7.22.15
