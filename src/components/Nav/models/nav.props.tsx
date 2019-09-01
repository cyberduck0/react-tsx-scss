import { NavLink } from './nav-link.model';
export interface NavProps {
  linkList: NavLink[];
  credentials?: Array<string | JSX.Element>;
}
