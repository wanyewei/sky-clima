import React, { useContext } from "react";
import styled from "styled-components";
import { ReactComponent as DateIcon } from "../../images/Date.svg";
import { ReactComponent as LocationIcon } from "../../images/location.svg";
import WeatherDataContext from "../../helpers/WeatherData";

const StyledTodayCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 12.2rem;
  border-radius: 1rem;
  padding: 1rem;
  color: ${(props) => props.theme.color.textMain};
  background-color: ${(props) => props.theme.color.backgroundSurface};

  svg {
    margin-right: 1.5rem;
  }
`;

const StyledTytle = styled.div`
  margin-bottom: 0.81rem;
  letter-spacing: 0.06rem;
  font-size: 0.75rem;
  font-weight: ${(props) => props.theme.typography.weightRegular};
`;

const StyledCurrentWheather = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTemperature = styled.div`
  display: flex;
  font-size: 3rem;
  font-weight: ${(props) => props.theme.typography.weight500};
`;

const StyledCelsius = styled.div`
  /* position: relative;
  top: 0;
  right: 0; */
  margin-left: 0.25rem;
  font-size: 1.5rem;
  font-weight: ${(props) => props.theme.typography.weightTitle};
`;

const StyledDescription = styled.div`
  font-size: 0.75rem;
  margin-top: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #7b7980;
`;

const StyledDate = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 0.87rem;
  font-size: 0.75rem;
  color: ${(props) => props.theme.color.textSecondary};

  svg {
    margin-right: 0.5rem;
  }
`;

const StyledLocation = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 0.87rem;
  font-size: 0.75rem;
  color: ${(props) => props.theme.color.textSecondary};

  svg {
    margin-right: 0.5rem;
  }
`;

const TodayCard = () => {
  const { currentWheather, cityName } = useContext(WeatherDataContext);

  return (
    <StyledTodayCard>
      <StyledTytle>Now</StyledTytle>
      <StyledCurrentWheather>
        <StyledTemperature>
          {Math.round(currentWheather.temperature * 10) / 10}
          <StyledCelsius>°C</StyledCelsius>
        </StyledTemperature>
        <img
          src={` https://openweathermap.org/img/wn/${currentWheather.icon}@2x.png`}
          width={60}
          height={60}
          loading="lazy"
          alt="direction"
        />
      </StyledCurrentWheather>
      <StyledDescription>{currentWheather.description}</StyledDescription>
      <StyledDate>
        <DateIcon />
        {currentWheather.observationTime}
      </StyledDate>
      <StyledLocation>
        <LocationIcon />
        {cityName}, Taiwan
      </StyledLocation>
    </StyledTodayCard>
  );
};

export default TodayCard;
