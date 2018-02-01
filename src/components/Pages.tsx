import * as React from 'react';
import Hello from './Hello';
import { RouteComponentProps } from 'react-router';

export interface WelcomeProps {
  messageProps: string;
  exampleActionInProps: () => void;
}

export class WelcomePage extends React.Component<WelcomeProps> {
    render() {
      return (
        <div>
          <Hello name="Home Page" enthusiasmLevel={3} />
          <p className="App-intro">
            {this.props.messageProps}
          </p>
          <p>Boiler Plate was made based off of the Typescript React Starter adding Router, Redux, Express,  </p>
          <div>
            <ul>
                <li>Server : Express (DONE)</li>
                <li>Transpiler : Typescript (DONE)</li>
                <li>Linter : TSLint (DONE)</li>
                <li>Testing: Jest (DONE)</li>
                <li>FrontEnd Framework: React-Redux-Router (DONE) </li>
                <li>Authentication: </li>
                <li>UI Framework: HCSS</li>
                <li>CSS Compiler: ??PostCSS + PreCSS + SCSS?? </li>
                <li>Authentication: ???</li>
                <li>Localization: react-localize-redux </li>
                <li>Persistance: ?? redux-persist ??</li>
                <li>Redux Actions: ?? redux-promise redux-thunk ??</li>
            </ul>
          </div>
        </div>
      );
    }
  }
  
export class TestPage extends React.Component<RouteComponentProps<{testId:string}>> {
    render() {
      // deconstruct match obj from this.props into variable testId
      const { match : { params : { testId } }} = this.props;
  
      return (
        <div>
          <Hello name="Test Page" enthusiasmLevel={3} />
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
          { testId && 
            <p> Selected {testId} as your Id in the URL </p>
          }
        </div>
      );
    }
  }