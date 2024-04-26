export interface IItemNavBar {
  children: string;
  active: boolean;
  to: string;
  onClick?: () => void;
}

export interface IItemProps {
  active: boolean;
}
