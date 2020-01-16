import * as React from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Card,
  CardBody,
  Label,
  Alert,
  Button
} from "reactstrap";
import { RouteComponentProps } from "react-router-dom";
// HOC required for connecting redux store with component
import { connect } from "react-redux";
// Action from redux store
import { toggleAlert } from "../store/actions/home";
interface IHomeProp extends RouteComponentProps {
  isAlert: boolean;
  toggleAlert(value: boolean): any;
}
interface IHomeState {}

class Home extends React.Component<IHomeProp, IHomeState> {
  constructor(props: IHomeProp) {
    super(props);
    this.state = {} as IHomeState;
  }
  public render(): React.ReactElement<IHomeProp> {
    return (
      <React.Fragment>
        <Container fluid>
          <h1>Home</h1>
          <Card>
            <CardBody>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label>Welcome to SPFx React Homepage.</Label>
                  </FormGroup>
                </Col>
                <Col xs="12">
                  <FormGroup>
                    {this.props.isAlert ? (
                      <Alert color="info">
                        This is alert. Toggle using redux.
                      </Alert>
                    ) : null}
                    <Button
                      size="sm"
                      color="primary"
                      onClick={() =>
                        this.props.toggleAlert(!this.props.isAlert)
                      }
                    >
                      Toggle
                    </Button>
                  </FormGroup>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </React.Fragment>
    );
  }
}
// Bind state from redux store to props
const mapStateToProps = state => ({
  isAlert: state.Home.alert // state.<Name of Reducer>.<Name of state from initalState> eg. state.Home.alert
});
// Bind actions from redux store to props
const mapActionsToProps = { toggleAlert };
export default connect(mapStateToProps, mapActionsToProps)(Home);
