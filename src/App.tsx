import React from "react";
import MainNavbar from "./components/navbar/MainNavbar";
import { AppContainer } from "./styles";

import { content } from "./resources/navbar/NavBarResources";
import HomeSection from "./components/sections/home/HomeSection";
import AboutSection from "./components/sections/about/AboutSection";
import TimelineSection from "./components/sections/timeline/TimelineSection";
import WorksSections from "./components/sections/works/WorksSections";
import ContactSection from "./components/sections/contact/ContactSection";

const App = () => {
  return (
    <AppContainer>
      <MainNavbar navBarData={content} />
      <HomeSection />
      <AboutSection />
      <TimelineSection />
      <WorksSections />
      <ContactSection />
    </AppContainer>
  );
};

export default App;
