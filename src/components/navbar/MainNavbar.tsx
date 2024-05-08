import { FC, Fragment, useState } from "react";
import {
  MainNavbarAllign,
  MainNavbarButton,
  MainNavbarContainer,
  MainNavbarContainer2,
  MainNavbarLogo,
  MainNavbarWrapper,
} from "./styles";
import { IMainNavbar } from "./interfaces";
import ItemNavBar from "./item/ItemNavBar";
import { NavbarTrackHook } from "../../hook/NavbarTrackHook";
import { WindowWidth } from "../../hook/WindowWidth";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
const MainNavbar: FC<IMainNavbar> = ({ navBarData }) => {
  const { activeNavItem, setActiveNavItem } = NavbarTrackHook();
  const { width } = WindowWidth();
  const [openNav, setOpenNav] = useState<boolean>(false);

  const renderItens = () => (
    <Fragment>
      {navBarData.map((n) => (
        <ItemNavBar
          key={n.id}
          active={n.id === activeNavItem}
          to={n.href}
          children={n.text}
          onClick={() => {
            setActiveNavItem(n.id);
            setOpenNav(false);
          }}
        />
      ))}
    </Fragment>
  );

  return (
    <MainNavbarWrapper>
      <MainNavbarAllign>
        <MainNavbarLogo href="/">Logo</MainNavbarLogo>
        {width > 660 ? (
          <MainNavbarContainer>{renderItens()}</MainNavbarContainer>
        ) : (
          <MainNavbarButton onClick={() => setOpenNav((val) => !val)}>
            {openNav ? <CgClose size={"1.5rem"} /> : <FaBars size={"1.5rem"} />}
          </MainNavbarButton>
        )}
      </MainNavbarAllign>
      {openNav && width <= 660 && (
        <MainNavbarContainer2>{renderItens()}</MainNavbarContainer2>
      )}
    </MainNavbarWrapper>
  );
};

export default MainNavbar;
