import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../content/css/App.css';
import { TestPage } from './Pages';
import { WelcomePageContainer } from '../containers/example';

const logo = require('../content/static/logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">REACT BOILERPLATE</h1>
          <h5 className="App-title"> Express-Webpack-Typescript-React-Redux-Router-Jest-Semantic-PreCSS-PostCSS </h5>
        </header>
        <Switch>
          <Route exact={true} path="/" component={WelcomePageContainer}/>
          <Route exact={true} path="/test/:testId?" component={TestPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
