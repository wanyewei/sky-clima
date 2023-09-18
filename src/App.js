import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";

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
