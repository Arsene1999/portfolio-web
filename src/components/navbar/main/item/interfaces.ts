export interface IMainMenuItem {
  children: string;
  active: boolean;
  to: string;
  onClick?: () => void;
}
