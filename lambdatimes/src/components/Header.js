import React from "react";
import { HeaderContainer, DateSpan, TempSpan } from "./HeaderStyles.js";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderContainer>
      {/* Is it SMARCH already? */}
      <DateSpan>SMARCH 32, 2018</DateSpan>
      <h1>Lambda Times</h1>
      <TempSpan>98°</TempSpan>
    </HeaderContainer>
  );
};

export default Header;
