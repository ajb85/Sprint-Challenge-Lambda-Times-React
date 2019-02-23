import React from "react";
import {
  TopBarStyled,
  TBContainer,
  TBLeft,
  TBCenter,
  TBRight
} from "./TopBarStyles.js";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = props => {
  return (
    <TopBarStyled>
      <TBContainer>
        <TBLeft>
          <span>TOPICS</span>
          <span>SEARCH</span>
        </TBLeft>
        <TBCenter>
          <span>GENERAL</span>
          <span>BROWNBAG</span>
          <span>RANDOM</span>
          <span>MUSIC</span>
          <span>ANNOUNCEMENTS</span>
        </TBCenter>
        <TBRight>
          <span onClick={() => props.login("loggingIn", true)}>LOG IN</span>
        </TBRight>
      </TBContainer>
    </TopBarStyled>
  );
};

export default TopBar;
