import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals  from './reportWebVitals';

import {Provider } from  'react-redux';
import {store} from './StoredGlobalData';


/*const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store = {store}>
        <App />
    </Provider>

);*/
//ReactDOM.render(
  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
