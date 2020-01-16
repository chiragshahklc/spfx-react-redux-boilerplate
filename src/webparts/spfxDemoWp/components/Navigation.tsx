import * as React from "react";
import { Navbar, NavbarBrand, NavItem, Nav, NavLink } from "reactstrap";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import routes from "../routes";
interface INavigationProps extends RouteComponentProps {}

const Navigation: React.FunctionComponent<INavigationProps> = props => {
  return (
    <React.Fragment>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand>SPFx React Boilerplate</NavbarBrand>
        <Nav navbar>
          {routes.map((route, i) => (
            <NavItem
              // Active link will be highlighted
              active={props.location.pathname === (route.path as string)}
            >
              <NavLink tag={Link} to={route.path as string}>
                {route.name}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </Navbar>
    </React.Fragment>
  );
};
// withRouter will show any route changes in whole application to this component
export default withRouter(Navigation);
