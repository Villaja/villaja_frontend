import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ReactDOMClient } from "react-dom/client";
import App from './App';
import './index.css';

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
