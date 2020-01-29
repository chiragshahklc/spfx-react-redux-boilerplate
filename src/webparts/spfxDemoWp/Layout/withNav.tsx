import * as React from "react";
import { connect } from "react-redux";
import Navigation from "../components/Navigation";
interface IWithNavProps {
  currentPath: string;
}
// example of functional component
const withNav: React.FunctionComponent<IWithNavProps> = props => {
  return (
    <React.Fragment>
      <Navigation></Navigation>
      <h6>
        Current Path : <strong>{props.currentPath}</strong>
      </h6>
      {props.children}
    </React.Fragment>
  );
};
const mapStateToProps = state => ({
  currentPath: state.Home.currentPath
});
export default connect(mapStateToProps, null)(withNav);
