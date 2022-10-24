import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import frontendReducer from "./modules/frontendReducer";

//Middleware is a function that stand in the middle to handle more function.
//to set up so redux can handleAsync request.
//this is handling Middleware
const handleAsync = function (reduxApi){
    return (next) => {
        return (action) => {
            if (typeof action == 'function'){
             return action(reduxApi.dispatch, reduxApi.getState)
            }
            next(action);
        }
    }
}

const store = createStore(frontendReducer, compose(applyMiddleware(handleAsync)));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
