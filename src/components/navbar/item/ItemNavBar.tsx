import { FC } from "react";
import { IItemNavBar } from "./interface";
import { ItemNavBarContainer, ItemNavBarLink } from "./styles";

const ItemNavBar: FC<IItemNavBar> = ({ active, to, onClick, children }) => {
  return (
    <ItemNavBarContainer active={active}>
      <ItemNavBarLink href={to} onClick={onClick}>
        {children}
      </ItemNavBarLink>
    </ItemNavBarContainer>
  );
};

export default ItemNavBar;
