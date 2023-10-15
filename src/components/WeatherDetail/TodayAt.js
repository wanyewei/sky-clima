import React, { useContext } from "react";
import styled from "styled-components";
import { ReactComponent as SunIcon } from "../../images/sun.svg";
import { ReactComponent as WindDirectionIcon } from "../../images/wind direction.svg";
import WheatherDataContext from "../../helpers/WheatherData";
import W04n from "../../images/wheathers/04d.png";

const StyledTodayAt = styled.div`
  flex: 0 0 100%;
  width: 95%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;

  @media (max-width: 996px) {
    margin-bottom: 5rem;
    flex: 0 0 100%;
    width: 90%;
  }
`;

const StyledTitle = styled.div`
  flex: 0 0 100%;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
  font-size: 0.75rem;
  font-weight: ${(props) => props.theme.typography.weightRegular};
`;

const Styledslider = styled.div`
  flex: 0 0 100%;
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-wrap: nowrap;
  gap: 2%;
  padding-bottom: 1rem;
  overflow-x: scroll;
  overflow-y: auto;
  scroll-padding: 30px;
  scroll-snap-type: x mandatory;
  white-space: nowrap;

  @media (max-width: 996px) {
    flex: 0 0 50%;
    overflow-x: scroll;
    overflow-y: auto;
    scroll-padding: 30px;
    scroll-snap-type: x mandatory;
    white-space: nowrap;
  }

  /* 自定义滚动条轨道样式 */
  &::-webkit-scrollbar {
    background-color: #202021;
    border-radius: 10px;
    /* 在这里定义滚动条轨道的样式 */
  }

  /* 自定义滚动条滑块样式 */
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #fff;
    /* 在这里定义滚动条滑块的样式 */
  }
`;

const StyledSlide = styled.div`
  flex: 0 0 10%;
  scroll-snap-align: start;
  font-size: 24px;
  text-align: center;
  @media (max-width: 996px) {
    flex: 0 0 10%;
    scroll-snap-align: start;
    font-size: 24px;
    text-align: center;
  }
`;

const StyledFooter = styled.div`
  /* flex: 0 0 100%; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem 0;
  @media (max-width: 996px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem 0;
  }
`;

const StyledCard = styled.div`
  /* flex: 0 0 80%; */
  width: 100%;
  /* height: 6.75rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  padding: 1rem 0 1rem 0;
  background-color: ${(props) => props.theme.color.backgroundSurface};
  svg {
    width: 40%;
    height: 40%;
    /* height: 40%; */
    margin: 0.69rem 0;
  }

  @media (max-width: 996px) {
    width: 5.0625rem;
    flex: 0 0 6.75rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    /* padding: 0.5rem 1.5rem 0.5rem 1.5rem;s */
    background-color: ${(props) => props.theme.color.backgroundSurface};
    svg {
      margin: 0;
    }
  }
`;

const StyledCardTime = styled.div`
  font-size: 100%;
  font-weight: ${(props) => props.theme.typography.weightRegular};
  @media (max-width: 996px) {
    font-size: 0.75rem;
    font-weight: ${(props) => props.theme.typography.weightRegular};
  }
`;

const StyledCardTemperature = styled.div`
  font-size: 1rem;
  font-weight: ${(props) => props.theme.typography.weightRegular};
  @media (max-width: 996px) {
    font-size: 0.75rem;
    font-weight: ${(props) => props.theme.typography.weightRegular};
  }
`;

const TodayAt = () => {
  const { forecastDatas, getHours } = useContext(WheatherDataContext);
  return (
    <StyledTodayAt>
      <StyledTitle>Today at</StyledTitle>
      <Styledslider>
        {forecastDatas.forecastList24.slice(0, 8).map((data, index) => {
          const windDirection = data.wind.deg;
          console.log(data.weather.icon);
          return (
            <StyledSlide key={index}>
              <StyledFooter>
                <StyledCard>
                  <StyledCardTime>
                    {getHours(data.dt, forecastDatas.timezone)}
                  </StyledCardTime>
                  <img
                    src={` https://openweathermap.org/img/wn/${data.weather.icon}@2x.png`}
                    width={48}
                    height={48}
                    // loading="lazy"
                    alt="direction"
                  />
                  <StyledCardTemperature>
                    {data.main.temp}
                  </StyledCardTemperature>
                </StyledCard>
                <StyledCard>
                  <StyledCardTime>
                    {getHours(data.dt, forecastDatas.timezone)}
                  </StyledCardTime>
                  <WindDirectionIcon
                    style={{ transform: `rotate(${windDirection - 315}deg)` }}
                  />
                  <StyledCardTemperature>
                    {data.wind.speed} km/h
                  </StyledCardTemperature>
                </StyledCard>
              </StyledFooter>
            </StyledSlide>
          );
        })}
      </Styledslider>
    </StyledTodayAt>
  );
};

export default TodayAt;
