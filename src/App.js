import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import { WeatherDataProvider } from "./helpers/WeatherData";

const App = () => {
  return (
    <BrowserRouter>
      <WeatherDataProvider>
        <Routes>
          <Route path="/" exact element={<Navigate to="/home" />} />
          <Route path="/home" exact element={<Homepage />} />
        </Routes>
      </WeatherDataProvider>
    </BrowserRouter>
  );
};

export default App;
