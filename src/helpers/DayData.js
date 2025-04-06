import React, { createContext } from "react";
import dayjs from "dayjs";

const DayDataContext = createContext(null);

export const DayDataProvider = ({ children }) => {
  const getMonth = (month = dayjs().month()) => {
    const year = dayjs().year();
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  };

  return (
    <DayDataContext.Provider value={{}}>{children}</DayDataContext.Provider>
  );
};

export default DayDataContext;
