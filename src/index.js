import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { store } from "./redux/store";
import HomeTemplate from "./Templates/HomeTemplate";
import { createBrowserHistory } from "history";
import Index from "./Pages/Index/Index";
import Detail from "./Pages/Detail/Detail";
import Profile from "./Pages/Profile/Profile";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Cart from "./Pages/Cart/Cart";
import Search from "./Pages/Search/Search";
import "./index.css";
export const history = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HistoryRouter history={history}>
    <Provider store={store}>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route element={<Index />} index></Route>
          <Route path="detail">
            <Route path=":id" element={<Detail />} />
          </Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </Provider>
  </HistoryRouter>
);
