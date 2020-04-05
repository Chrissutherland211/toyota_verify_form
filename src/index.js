import React from 'react';
import ReactDOM from 'react-dom';
import App from './views';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './state/store';
import ThemeSetting from './utilities/theme/index';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { GlobalStyles } from './views/styled/GlobalStyles';

const theme = createMuiTheme(ThemeSetting)

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
