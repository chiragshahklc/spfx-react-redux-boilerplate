import * as React from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Card,
  CardBody,
  Label
} from "reactstrap";
import { RouteComponentProps } from "react-router-dom";
interface IAboutProp extends RouteComponentProps {}
interface IAboutState {}

class About extends React.Component<IAboutProp, IAboutState> {
  constructor(props: IAboutProp) {
    super(props);
    this.state = {} as IAboutState;
  }
  public render(): React.ReactElement<IAboutProp> {
    return (
      <React.Fragment>
        <Container fluid>
          <h1>About</h1>
          <Card>
            <CardBody>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label>This is About Page.</Label>
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
export default About;
