import { FC } from "react";
import { IItemNavBar } from "./interface";
import { ItemNavBarLink } from "./styles";

const ItemNavBar: FC<IItemNavBar> = ({ active, to, onClick, children }) => {
  return (
    <ItemNavBarLink active={active} href={to} onClick={onClick}>
      {children}
    </ItemNavBarLink>
  );
};

export default ItemNavBar;
