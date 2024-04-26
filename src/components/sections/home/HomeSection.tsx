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
    <HomeSectionWrapper id="#home">
      <HomeSectionContainer>
        <HomeSectionTextBox>
          <HomeSectionTitle>
            Hello World, I’m <br />
            <HomeSectionSpan>Jhon Dantas</HomeSectionSpan>
          </HomeSectionTitle>
          <HomeSectionSub>
            Experienced in _ Front end development
          </HomeSectionSub>
        </HomeSectionTextBox>
        <div>imagem</div>
      </HomeSectionContainer>
    </HomeSectionWrapper>
  );
};

export default HomeSection;
