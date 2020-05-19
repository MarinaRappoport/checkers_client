import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseLine from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import * as serviceWorker from './serviceWorker';
import theme from './theme';
import './index.css';
import store from './store';
import App from './containers/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseLine />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
