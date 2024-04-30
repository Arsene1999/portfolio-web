import React from "react";
import MainNavbar from "./components/navbar/MainNavbar";
import { AppContainer } from "./styles";

import { content } from "./resources/navbar/NavBarResources";
import HomeSection from "./components/sections/home/HomeSection";
import AboutSection from "./components/sections/about/AboutSection";
import TimelineSection from "./components/sections/timeline/TimelineSection";

const App = () => {
  return (
    <AppContainer>
      <MainNavbar navBarData={content} />
      <HomeSection />
      <AboutSection /> <TimelineSection />
    </AppContainer>
  );
};

export default App;
