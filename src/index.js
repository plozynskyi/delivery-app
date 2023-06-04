import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './redux/store';
// import { persistStor } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
import { theme } from 'theme/theme';
import { App } from 'App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/delivery-app">
    {/* <React.StrictMode> */}
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        <ToastContainer />
      </ThemeProvider>
    </Provider>
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
