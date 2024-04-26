import { FC, useEffect, useState } from "react";
import {
  MainNavbarContainer,
  MainNavbarLogo,
  MainNavbarWrapper,
} from "./styles";
import { IMainNavbar } from "./interfaces";
import ItemNavBar from "./item/ItemNavBar";
import { ActiveItem, isActiveItem } from "../../types";

const MainNavbar: FC<IMainNavbar> = ({ navBarData }) => {
  const [activeNavItem, setActiveNavItem] = useState<ActiveItem>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("div");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          if (isActiveItem(section.id)) setActiveNavItem(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MainNavbarWrapper>
      <MainNavbarLogo href="/">Logo</MainNavbarLogo>
      <MainNavbarContainer>
        {navBarData.map((n) => (
          <ItemNavBar
            key={n.id}
            active={n.id === activeNavItem}
            to={n.href}
            children={n.text}
            onClick={() => setActiveNavItem(n.id)}
          />
        ))}
      </MainNavbarContainer>
    </MainNavbarWrapper>
  );
};

export default MainNavbar;
