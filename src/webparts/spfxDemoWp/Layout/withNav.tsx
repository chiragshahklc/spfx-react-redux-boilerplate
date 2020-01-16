import * as React from "react";
import Navigation from "../components/Navigation";
interface IWithNavProps {}
const withNav: React.FunctionComponent<IWithNavProps> = props => {
  return (
    <React.Fragment>
      <Navigation></Navigation>
      {props.children}
    </React.Fragment>
  );
};
export default withNav;
