import TypeWriterAnimation from "../../animations/type-writer/TypeWriterAnimation";
import {
  HomeSectionAllingButtons,
  HomeSectionBouncyDiv,
  HomeSectionButtons,
  HomeSectionContainer,
  HomeSectionSpan,
  HomeSectionSub,
  HomeSectionText,
  HomeSectionTextBox,
  HomeSectionTitle,
  HomeSectionWrapper,
} from "./styles";
import { FiChevronsDown } from "react-icons/fi";
import { SlMouse } from "react-icons/sl";
import { MdOutlineFileDownload } from "react-icons/md";
import PortaitComponent from "../../portait/PortaitComponent";

const HomeSection = () => {
  return (
    <HomeSectionWrapper id="home">
      <HomeSectionContainer>
        <HomeSectionTextBox>
          <HomeSectionTitle>
            Hello World, I’m <br />
            <HomeSectionSpan>John Dantas</HomeSectionSpan>
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

            <HomeSectionButtons href={require("./Curriculo.pdf")}>
              Resume <MdOutlineFileDownload size="1rem" />
            </HomeSectionButtons>
          </HomeSectionAllingButtons>
          <HomeSectionBouncyDiv>
            <SlMouse size="2rem" />
            <FiChevronsDown size="2rem" />
          </HomeSectionBouncyDiv>
        </HomeSectionTextBox>

        <PortaitComponent />
      </HomeSectionContainer>
    </HomeSectionWrapper>
  );
};

export default HomeSection;
