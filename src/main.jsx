import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ReactDOMClient } from "react-dom/client";
import { SellerLogIn } from "./pages/Seller Login Page";
import { CustomerSignUp } from "./pages/Customer SignUp Page/";
import { CustomerLogIn } from "./pages/Customer Login Page";
import { SellerSignUp } from "./pages/Customer SignUp Page";
import App from './App';
import './index.css';

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);



root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <SellerLogIn />
    <CustomerSignUp />
    <CustomerLogIn />
    <SellerSignUp />
  </React.StrictMode>
);
