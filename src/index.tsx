import React from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import * as serviceWorker from "./serviceWorker";

import App from "./App";
import BeerPage from "./pages/BeerPage";
import AboutUsPage from "./pages/AboutUsPage";
import NotFoundPage from "./pages/NotFoundPage";

import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";

// redux toolkit
import { Provider } from "react-redux";
import store from "./redux/store";
import { setUser } from "./features/authentication/authenticationSlice";

store.subscribe(() => {
  console.log("Redux toolkit state: " + store.getState());
});
store.dispatch(setUser(store.getState()));

const routing = (
  <Router>
    <Provider store={store}>
      <Header user={store.getState().authentication.user} />
      <div className="page">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/beer" element={<BeerPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </div>
    </Provider>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
