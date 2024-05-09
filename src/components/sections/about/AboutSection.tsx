import { flipCardResources } from "../../../resources/cards/CardsList";
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
      <AboutSectionTitle>Sobre mim</AboutSectionTitle>
      <AboutSectionContainer>
        {textAbout.map((t) => (
          <TextWithTitle title={t.title} text={t.text} />
        ))}
      </AboutSectionContainer>
      <AboutSectionTitle>Habilidades</AboutSectionTitle>

      <AboutSectionFlipCard>
        {flipCardResources.map((f) => (
          <FlipCard Icon={f.icon} text={f.text} />
        ))}
      </AboutSectionFlipCard>
    </AboutSectionWrapper>
  );
};

export default AboutSection;
