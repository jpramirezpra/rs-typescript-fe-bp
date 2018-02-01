import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import registerServiceWorker from './common/registerServiceWorker';

// router
import { BrowserRouter as Router } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import { store } from './reducers/AppStore';

import App from './components/App';
import './content/css/index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
// registerServiceWorker();
