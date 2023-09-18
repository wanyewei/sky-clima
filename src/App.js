import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";

const theme = {
  primary: "#FFD260",
  textMain: "#FFF",
  textSecondary: "#7B7980",
  backgroundColor: "#100E17",
  backgroundSurface: "#7B7980",
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Navigate to="/home" />} />
        <Route path="/home" exact element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
