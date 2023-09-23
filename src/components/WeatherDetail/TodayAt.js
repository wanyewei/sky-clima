import React from "react";
import styled from "styled-components";
import { ReactComponent as SunIcon } from "../../images/sun.svg";
import { ReactComponent as WindDirectionIcon } from "../../images/wind direction.svg";

const StyledTodayAt = styled.div`
  width: 35.25rem;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
`;

const StyledTitle = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
  font-size: 0.75rem;
  font-weight: ${(props) => props.theme.typography.weightRegular};
`;

const Styledslider = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  gap: 0.75rem;
  padding-bottom: 1rem;
  overflow-x: scroll;
  scroll-padding: 30px;
  scroll-snap-type: x mandatory;
  white-space: nowrap;

  /* 自定义滚动条轨道样式 */
  &::-webkit-scrollbar {
    background-color: #14ebce;
    /* 在这里定义滚动条轨道的样式 */
  }

  /* 自定义滚动条滑块样式 */
  &::-webkit-scrollbar-thumb {
    width: 32px;
    background-color: #3498db;
    /* 在这里定义滚动条滑块的样式 */
  }
`;

const StyledSlide = styled.div`
  flex: 0 0 5.06rem;
  scroll-snap-align: start;
  font-size: 24px;
  text-align: center;
`;

const StyledFooter = styled.div`
  width: 5.06rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem 0;
`;

const StyledCard = styled.div`
  width: 5.06rem;
  height: 6.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.color.backgroundSurface};
  svg {
    width: 2rem;
    height: 2rem;
    margin: 0.69rem 0;
  }
`;

const StyledCardTime = styled.div`
  font-size: 0.75rem;
  font-weight: ${(props) => props.theme.typography.weightRegular};
`;

const StyledCardTemperature = styled.div`
  font-size: 0.75rem;
  font-weight: ${(props) => props.theme.typography.weightRegular};
`;

const TodayAt = () => {
  return (
    <StyledTodayAt>
      <StyledTitle>Today at</StyledTitle>
      <Styledslider>
        <StyledSlide>
          <StyledFooter>
            <StyledCard>
              <StyledCardTime>2 AM</StyledCardTime>
              <SunIcon />
              <StyledCardTemperature>30°C </StyledCardTemperature>
            </StyledCard>
            <StyledCard>
              <StyledCardTime>2 AM</StyledCardTime>
              <WindDirectionIcon />
              <StyledCardTemperature>6 km/h </StyledCardTemperature>
            </StyledCard>
          </StyledFooter>
        </StyledSlide>
        <StyledSlide>
          <StyledFooter>
            <StyledCard>
              <StyledCardTime>2 AM</StyledCardTime>
              <SunIcon />
              <StyledCardTemperature>30°C </StyledCardTemperature>
            </StyledCard>
            <StyledCard>
              <StyledCardTime>2 AM</StyledCardTime>
              <WindDirectionIcon />
              <StyledCardTemperature>6 km/h </StyledCardTemperature>
            </StyledCard>
          </StyledFooter>
        </StyledSlide>
        <StyledSlide>
          <StyledFooter>
            <StyledCard>
              <StyledCardTime>2 AM</StyledCardTime>
              <SunIcon />
              <StyledCardTemperature>30°C </StyledCardTemperature>
            </StyledCard>
            <StyledCard>
              <StyledCardTime>2 AM</StyledCardTime>
              <WindDirectionIcon />
              <StyledCardTemperature>6 km/h </StyledCardTemperature>
            </StyledCard>
          </StyledFooter>
        </StyledSlide>
        <StyledSlide>
          <StyledFooter>
            <StyledCard>
              <StyledCardTime>2 AM</StyledCardTime>
              <SunIcon />
              <StyledCardTemperature>30°C </StyledCardTemperature>
            </StyledCard>
            <StyledCard>
              <StyledCardTime>2 AM</StyledCardTime>
              <WindDirectionIcon />
              <StyledCardTemperature>6 km/h </StyledCardTemperature>
            </StyledCard>
          </StyledFooter>
        </StyledSlide>
        <StyledSlide>
          <StyledFooter>
            <StyledCard>
              <StyledCardTime>2 AM</StyledCardTime>
              <SunIcon />
              <StyledCardTemperature>30°C </StyledCardTemperature>
            </StyledCard>
            <StyledCard>
              <StyledCardTime>2 AM</StyledCardTime>
              <WindDirectionIcon />
              <StyledCardTemperature>6 km/h </StyledCardTemperature>
            </StyledCard>
          </StyledFooter>
        </StyledSlide>
        <StyledSlide>
          <StyledFooter>
            <StyledCard>
              <StyledCardTime>2 AM</StyledCardTime>
              <SunIcon />
              <StyledCardTemperature>30°C </StyledCardTemperature>
            </StyledCard>
            <StyledCard>
              <StyledCardTime>2 AM</StyledCardTime>
              <WindDirectionIcon />
              <StyledCardTemperature>6 km/h </StyledCardTemperature>
            </StyledCard>
          </StyledFooter>
        </StyledSlide>
        <StyledSlide>
          <StyledFooter>
            <StyledCard>
              <StyledCardTime>2 AM</StyledCardTime>
              <SunIcon />
              <StyledCardTemperature>30°C </StyledCardTemperature>
            </StyledCard>
            <StyledCard>
              <StyledCardTime>2 AM</StyledCardTime>
              <WindDirectionIcon />
              <StyledCardTemperature>6 km/h </StyledCardTemperature>
            </StyledCard>
          </StyledFooter>
        </StyledSlide>
        <StyledSlide>
          <StyledFooter>
            <StyledCard>
              <StyledCardTime>2 AM</StyledCardTime>
              <SunIcon />
              <StyledCardTemperature>30°C </StyledCardTemperature>
            </StyledCard>
            <StyledCard>
              <StyledCardTime>2 AM</StyledCardTime>
              <WindDirectionIcon />
              <StyledCardTemperature>6 km/h </StyledCardTemperature>
            </StyledCard>
          </StyledFooter>
        </StyledSlide>
      </Styledslider>
    </StyledTodayAt>
  );
};

export default TodayAt;
