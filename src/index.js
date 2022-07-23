import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import rootReducer from './slices/index';
import {configureStore} from "@reduxjs/toolkit";


const store = configureStore({
  reducer: rootReducer
})

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
      <ScrollToTop />
      <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

