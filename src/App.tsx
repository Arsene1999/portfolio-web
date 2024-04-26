import React from "react";
import MainNavbar from "./components/navbar/MainNavbar";
import { AppContainer } from "./styles";

import { content } from "./resources/navbar/NavBarResources";
import HomeSection from "./components/sections/home/HomeSection";
import AboutSection from "./components/sections/about/AboutSection";

const App = () => {
  return (
    <AppContainer>
      <MainNavbar navBarData={content} />
      <HomeSection />
      <AboutSection />
    </AppContainer>
  );
};

export default App;
