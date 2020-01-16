import * as React from "react";
import { ISpfxDemoWpProps } from "./ISpfxDemoWpProps";
// SPFx only supports HashRouter
import { HashRouter, Route, Switch } from "react-router-dom";
// Initialize redux store at root of the react component using Provider
import { Provider } from "react-redux";
// Array of routes from file
import routes from "../routes";
// Component with Navigation bar, All the components passed as childer will have navigation by default
import WithNav from "../Layout/withNav";
// Redux store
import Store from "../store";

// HOC to make any component use WithNav layout
const withLayout = WrappedComponent => {
  return class extends React.Component {
    public render() {
      return (
        <WithNav>
          <WrappedComponent></WrappedComponent>
        </WithNav>
      );
    }
  };
};

export default class SpfxDemoWp extends React.Component<ISpfxDemoWpProps, {}> {
  public render(): React.ReactElement<ISpfxDemoWpProps> {
    return (
      <Provider store={Store}>
        <HashRouter>
          <Switch>
            {// Generate all routes from routes array
            routes.map((route, i) => {
              return (
                <Route
                  path={route.path}
                  component={withLayout(route.component)}
                  key={`route-${i + 1}`}
                ></Route>
              );
            })}
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}
