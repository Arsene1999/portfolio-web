import { textAbout } from "../../../resources/text-about/TextAbout";
import FlipCard from "../../flip-card/FlipCard";
import {
  AboutSectionContainer,
  AboutSectionFlipCard,
  AboutSectionTitle,
  AboutSectionWrapper,
} from "./styles";
import TextWithTitle from "./text-with-title/TextWithTitle";

const AboutSection = () => {
  return (
    <AboutSectionWrapper id="about">
      <AboutSectionTitle>About Me </AboutSectionTitle>
      <AboutSectionContainer>
        {textAbout.map((t) => (
          <TextWithTitle title={t.title} text={t.text} />
        ))}
      </AboutSectionContainer>
      <AboutSectionFlipCard>
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
      </AboutSectionFlipCard>
    </AboutSectionWrapper>
  );
};

export default AboutSection;
