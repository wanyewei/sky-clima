import React, { useContext } from "react";
import styled from "styled-components";
import { ReactComponent as SumIcon } from "../../images/sun.svg";
import WheatherDataContext from "../../helpers/WheatherData";

const StyledFutureCard = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 1rem; */
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
  /* height: 8.5rem; */
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

  svg {
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
    useContext(WheatherDataContext);

  return (
    <StyledFutureCard>
      <StyledTitle>5 Days Forecast</StyledTitle>

      <StyledWheatherForecst>
        {forecastDatas.forecastList24.map((data, index) => {
          if (index % 8 === 0) {
            let dt = new Date(data.dt_txt);
            // console.log(timestamp);
            const weekname = weekDayNames[dt.getUTCDay()];
            const monthName = monthNames[dt.getUTCMonth()];

            return (
              <StyledDiv key={index}>
                <StyledTemperature>
                  <img
                    src={` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    width={28}
                    height={28}
                    loading="lazy"
                    alt="direction"
                  />
                  {data.main.temp}°C
                </StyledTemperature>
                <StyledDate>
                  {dt.getDate()}&nbsp;
                  {monthName}
                </StyledDate>
                <StyledDay>{weekname}</StyledDay>
              </StyledDiv>
            );
          }
        })}

        {/* <StyledDiv>
          <StyledTemperature>
            <SumIcon />
            30°C
          </StyledTemperature>
          <StyledDate>17 Sep</StyledDate>
          <StyledDay>Sunday</StyledDay>
        </StyledDiv>
        <StyledDiv>
          <StyledTemperature>
            <SumIcon />
            30°C
          </StyledTemperature>
          <StyledDate>17 Sep</StyledDate>
          <StyledDay>Sunday</StyledDay>
        </StyledDiv>
        <StyledDiv>
          <StyledTemperature>
            <SumIcon />
            30°C
          </StyledTemperature>
          <StyledDate>17 Sep</StyledDate>
          <StyledDay>Sunday</StyledDay>
        </StyledDiv>
        <StyledDiv>
          <StyledTemperature>
            <SumIcon />
            30°C
          </StyledTemperature>
          <StyledDate>17 Sep</StyledDate>
          <StyledDay>Sunday</StyledDay>
        </StyledDiv> */}
      </StyledWheatherForecst>
    </StyledFutureCard>
  );
};

export default FutureCard;
