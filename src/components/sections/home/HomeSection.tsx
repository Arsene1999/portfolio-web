import TypeWriterAnimation from "../../animations/type-writer/TypeWriterAnimation";
import {
  HomeSectionContainer,
  HomeSectionSpan,
  HomeSectionSub,
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
        </HomeSectionTextBox>

        <div>imagem</div>
      </HomeSectionContainer>
    </HomeSectionWrapper>
  );
};

export default HomeSection;
