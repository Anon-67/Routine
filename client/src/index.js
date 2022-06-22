import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/NavBar/NavBar.css';
import actionCable from 'actioncable'
import { Provider } from 'react-redux';
import store from "./store"

const CableApp = {}
CableApp.cable = actionCable.createConsumer("ws://localhost:3000/cable")
export const ActionCableContext = createContext()



ReactDOM.render(
  <Provider store={store}>
    <ActionCableContext.Provider value={CableApp.cable}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ActionCableContext.Provider>
  </Provider>,
  document.getElementById('root')
);

