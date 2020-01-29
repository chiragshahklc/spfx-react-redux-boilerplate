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
  Button,
  Tooltip
} from "reactstrap";
import { RouteComponentProps } from "react-router-dom";
import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
// HOC required for connecting redux store with component
import { connect } from "react-redux";
// Action from redux store
import { toggleAlert } from "../store/actions/home";
import { getAllCountries } from "../helper/countries";
interface IHomeProp extends RouteComponentProps {
  isAlert: boolean;
  toggleAlert(value: boolean): any;
  httpClient: SPHttpClient;
}
interface IHomeState {
  callAxiosTooltip: boolean;
  callSPRestTooltip: boolean;
  axiosStatus: string;
  spRestStatus: string;
}

class Home extends React.Component<IHomeProp, IHomeState> {
  constructor(props: IHomeProp) {
    super(props);
    this.state = {
      callAxiosTooltip: false,
      callSPRestTooltip: false,
      axiosStatus: "",
      spRestStatus: ""
    } as IHomeState;
  }
  toggleCallAxiosTooltip = () => {
    this.setState((state, prop) => ({
      callAxiosTooltip: !state.callAxiosTooltip
    }));
  };
  toggleCallSPRestTooltip = () => {
    this.setState((state, prop) => ({
      callSPRestTooltip: !state.callSPRestTooltip
    }));
  };
  // This is example of calling SharePoint rest api
  getAllLists = async () => {
    let response: SPHttpClientResponse = await this.props.httpClient
      .get(
        "https://contoso.sharepoint.com/sites/SubSite/_api/web/lists",
        SPHttpClient.configurations.v1,
        {
          headers: {
            Accept: "application/json;odata=nometadata",
            "odata-version": ""
          }
        }
      )
      .catch(err => {
        throw err;
      });
    let result = await response.json();
    return result;
  };
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
                <Col xs="12">
                  <FormGroup>
                    <Button
                      id="callAxios"
                      color="info"
                      size="sm"
                      onClick={() => {
                        this.setState({ axiosStatus: "Please wait" });
                        getAllCountries().then(countries => {
                          this.setState({
                            axiosStatus: "Done. (Please check console)"
                          });
                          console.log({ countries });
                        });
                      }}
                    >
                      Call Axios
                    </Button>
                    <Tooltip
                      placement="right"
                      target="callAxios"
                      isOpen={this.state.callAxiosTooltip}
                      toggle={this.toggleCallAxiosTooltip}
                    >
                      This will call 3<sup>rd</sup> party api call and return
                      result in console
                    </Tooltip>
                    <p>
                      Axios Status: <strong>{this.state.axiosStatus}</strong>
                    </p>
                  </FormGroup>
                </Col>
                <Col xs="12">
                  <FormGroup>
                    <Button
                      id="callSPRest"
                      color="info"
                      size="sm"
                      onClick={() => {
                        this.setState({ spRestStatus: "Please wait" });
                        this.getAllLists()
                          .then(result => {
                            this.setState({
                              spRestStatus: "Done. (Please check console)"
                            });
                            console.log({ result });
                          })
                          .catch(err => {
                            this.setState({
                              spRestStatus: "Error. Please follow tooltip"
                            });
                          });
                      }}
                    >
                      Get All Lists
                    </Button>
                    <Tooltip
                      placement="right"
                      target="callSPRest"
                      isOpen={this.state.callSPRestTooltip}
                      toggle={this.toggleCallSPRestTooltip}
                    >
                      This won't work on localhost workbench. You need SPO
                      Workbench.
                    </Tooltip>
                    <p>
                      SP Rest Status: <strong>{this.state.spRestStatus}</strong>
                    </p>
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
  isAlert: state.Home.alert, // state.<Name of Reducer>.<Name of state from initalState> eg. state.Home.alert
  httpClient: state.Home.httpClient
});
// Bind actions from redux store to props
const mapActionsToProps = { toggleAlert };
export default connect(mapStateToProps, mapActionsToProps)(Home);
