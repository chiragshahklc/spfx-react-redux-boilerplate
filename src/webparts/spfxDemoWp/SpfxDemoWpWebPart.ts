import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-webpart-base";

import * as strings from "SpfxDemoWpWebPartStrings";
import SpfxDemoWp from "./components/SpfxDemoWp";
import { ISpfxDemoWpProps } from "./components/ISpfxDemoWpProps";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

export interface ISpfxDemoWpWebPartProps {
  description: string;
}

export default class SpfxDemoWpWebPart extends BaseClientSideWebPart<
  ISpfxDemoWpWebPartProps
> {
  public render(): void {
    const element: React.ReactElement<ISpfxDemoWpProps> = React.createElement(
      SpfxDemoWp,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
