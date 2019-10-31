import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Modal from "./components/modal/modal.component";
import { Provider } from "react-redux";
import store from "./redux/store";
import * as serviceWorker from "./serviceWorker";
import { HashRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
const customHistory = createBrowserHistory();
ReactDOM.render(
  <Provider store={store}>
    <Router history={customHistory}>
      <Route path="/">
        <App />
        <Modal />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
