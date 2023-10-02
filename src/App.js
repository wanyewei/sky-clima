import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import { WheatherDataProvider } from "./helpers/WheatherData";

const App = () => {
  return (
    <BrowserRouter>
      <WheatherDataProvider>
        <Routes>
          <Route path="/" exact element={<Navigate to="/home" />} />
          <Route path="/home" exact element={<Homepage />} />
        </Routes>
      </WheatherDataProvider>
    </BrowserRouter>
  );
};

export default App;
