import { useEffect, useState } from "react";
import { ActiveItem, isActiveItem } from "../types";

export const NavbarTrackHook = () => {
  const [activeNavItem, setActiveNavItem] = useState<ActiveItem>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

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

  return { activeNavItem, setActiveNavItem };
};
