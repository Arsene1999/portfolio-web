import { NavBarDataType } from '../../../resources/main-nav-bar/types';

export interface IMainNavbar {
  navBarData: NavBarDataType[];
  rightComponent?: React.JSX.Element;
}
