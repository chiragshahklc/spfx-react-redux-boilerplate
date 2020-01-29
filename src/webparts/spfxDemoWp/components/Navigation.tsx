import * as React from "react";
import { Navbar, NavbarBrand, NavItem, Nav, NavLink } from "reactstrap";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { updateCurrentPath } from "../store/actions/home";
import routes from "../routes";
interface INavigationProps extends RouteComponentProps {
  updateCurrentPath(path: string): any;
}
interface INavigationState {}

class Navigation extends React.Component<INavigationProps, INavigationState> {
  public componentDidMount() {
    // This route listener will always called whenever any route changes in whole application
    this.props.history.listen(listener => {
      // Litener will call only after route change. It won't call initially
      // You can use listener to update anything.
      this.props.updateCurrentPath(listener.pathname);
      console.log(listener.pathname);
    });
  }
  public render(): React.ReactElement<INavigationProps> {
    const { props } = this;
    return (
      <React.Fragment>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand>SPFx React Boilerplate</NavbarBrand>
          <Nav navbar>
            {routes.map((route, i) => (
              <NavItem
                key={`navItem-${i + 1}`}
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
  }
}
// withRouter will show any route changes in whole application to this component
export default withRouter(connect(null, { updateCurrentPath })(Navigation));
