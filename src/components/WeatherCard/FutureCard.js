import React, { useContext } from "react";
import styled from "styled-components";
import WeatherDataContext from "../../helpers/WeatherData";

const StyledFutureCard = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.color.textMain};

  @media (max-width: 996px) {
    width: 89%;
  }
`;

const StyledTitle = styled.div`
  margin-bottom: 1rem;
  letter-spacing: 0.06rem;
  font-size: 0.75rem;
  font-weight: ${(props) => props.theme.typography.weightRegular};
`;

const StyledWheatherForecst = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.color.backgroundSurface};

  @media (max-width: 996px) {
    margin-left: -1rem;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 0.56rem;
  font-size: 0.85rem;
  font-weight: ${(props) => props.theme.typography.weightRegular};

  &:first-child {
    margin-top: 0;
  }
`;

const StyledTemperature = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 1.1875rem;
    height: 1.1875rem;
    margin-right: 0.25rem;
  }
`;

const StyledDate = styled.span`
  display: flex;
  flex: 1;
  justify-content: center;
  letter-spacing: 0.06rem;
  text-align: center;
`;

const StyledDay = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  letter-spacing: 0.06rem;
  text-align: center;
`;

const FutureCard = () => {
  const { forecastDatas, weekDayNames, monthNames } =
    useContext(WeatherDataContext);

  // ⏰ 取得未來 5 天中午的預報（排除今天）
  const getMaxTempPerDay = (forecastList, count = 6) => {
    const todayKey = new Date().toISOString().split("T")[0];

    const groupedMax = forecastList.reduce((acc, item) => {
      const date = new Date(item.dt * 1000);
      const day = date.toISOString().split("T")[0];

      if (date.getDate() === todayKey) return acc;

      if (!acc[day] || item.main.temp > acc[day].main.temp) {
        acc[day] = item; // 直接只保留最高的
      }

      return acc;
    }, {});

    return Object.values(groupedMax).slice(1, count);
  };
  const futureForecast = getMaxTempPerDay(forecastDatas.forecastList24);

  return (
    <StyledFutureCard>
      <StyledTitle>5 Days Forecast</StyledTitle>
      <StyledWheatherForecst>
        {futureForecast.map((data, index) => {
          const dt = new Date(data.dt * 1000);
          const weekname = weekDayNames[dt.getDay()];
          const monthName = monthNames[dt.getMonth()];

          return (
            <StyledDiv key={index}>
              <StyledTemperature>
                <img
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  width={28}
                  height={28}
                  loading="lazy"
                  alt={data.weather[0].description}
                />
                {Math.round(data.main.temp)}°C
              </StyledTemperature>
              <StyledDate>
                {dt.getDate()}&nbsp;{monthName}
              </StyledDate>
              <StyledDay>{weekname}</StyledDay>
            </StyledDiv>
          );
        })}
      </StyledWheatherForecst>
    </StyledFutureCard>
  );
};

export default FutureCard;
