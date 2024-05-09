import TypeWriterAnimation from "../../animations/type-writer/TypeWriterAnimation";
import {
  HomeSectionAllingButtons,
  HomeSectionBouncyDiv,
  HomeSectionButtons,
  HomeSectionContainer,
  HomeSectionDivBreak,
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
import { WindowWidth } from "../../../hook/WindowWidth";

const HomeSection = () => {
  const { width } = WindowWidth();

  return (
    <HomeSectionWrapper id="home">
      <HomeSectionContainer>
        <HomeSectionTextBox>
          <HomeSectionTitle>
            Olá, Eu sou
            <br />
            <HomeSectionSpan>João Dantas</HomeSectionSpan>
          </HomeSectionTitle>
          <HomeSectionSub>
            Experiente em:{" "}
            <TypeWriterAnimation
              value={[
                "Desenvolvimento front-end",
                "React.js",
                "Next.js",
                "Git",
                "Azure",
              ]}
            />
          </HomeSectionSub>
          <HomeSectionText>
            <span>Desenvolvedor Front-end </span>apaixonado, com sólida
            experiência em React, Next, Material Ui e Chakra Ui.
          </HomeSectionText>
          <HomeSectionAllingButtons>
            <HomeSectionButtons href="/#contact">
              Contrate-me
            </HomeSectionButtons>

            <HomeSectionButtons href={require("./Curriculo.pdf")}>
              Currículo <MdOutlineFileDownload size="1rem" />
            </HomeSectionButtons>
          </HomeSectionAllingButtons>
          {width < 900 ? (
            <HomeSectionDivBreak />
          ) : (
            <HomeSectionBouncyDiv>
              <SlMouse size="2rem" />
              <FiChevronsDown size="2rem" />
            </HomeSectionBouncyDiv>
          )}
        </HomeSectionTextBox>

        <PortaitComponent />
      </HomeSectionContainer>
    </HomeSectionWrapper>
  );
};

export default HomeSection;
