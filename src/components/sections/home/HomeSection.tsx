import TypeWriterAnimation from "../../animations/type-writer/TypeWriterAnimation";
import {
  HomeSectionAllingButtons,
  HomeSectionButtons,
  HomeSectionContainer,
  HomeSectionSpan,
  HomeSectionSub,
  HomeSectionText,
  HomeSectionTextBox,
  HomeSectionTitle,
  HomeSectionWrapper,
} from "./styles";

const HomeSection = () => {
  return (
    <HomeSectionWrapper id="home">
      <HomeSectionContainer>
        <HomeSectionTextBox>
          <HomeSectionTitle>
            Hello World, I’m <br />
            <HomeSectionSpan>Jhon Dantas</HomeSectionSpan>
          </HomeSectionTitle>
          <HomeSectionSub>
            Experienced in:{" "}
            <TypeWriterAnimation
              value={["Front-end development", "Looking for new projects"]}
            />
          </HomeSectionSub>
          <HomeSectionText>
            Passionate <span>Front-end Developer</span> with strong background
            in both front-end and back-end technologies.
          </HomeSectionText>
          <HomeSectionAllingButtons>
            <HomeSectionButtons>Hire Me</HomeSectionButtons>
            <HomeSectionButtons>Resume </HomeSectionButtons>
          </HomeSectionAllingButtons>
        </HomeSectionTextBox>

        <div>imagem</div>
      </HomeSectionContainer>
    </HomeSectionWrapper>
  );
};

export default HomeSection;
