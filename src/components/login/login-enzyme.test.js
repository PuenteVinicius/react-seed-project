import React from "react";
import toJson from "enzyme-to-json";
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import { mount, shallow } from "enzyme";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "../../store/reducers";
import Login from "./login";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
      && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)

it("should render the homepage", () => {
  const props = {
    initialValue: "Seu nome aqui"
  };
  const login = mount(
    <Provider store={store}>
      <Login {...props} />
    </Provider>
  );
  expect(toJson(login)).toMatchSnapshot();
});

it("should render 'Seu nome aqui' at label", () => {
  const props = {
    initialValue: "Seu nome aqui"
  };
  const login = mount(
    <Provider store={store}>
      <Login {...props} />
    </Provider>
  );
  expect(login.contains(<label>Seu nome aqui</label>)).toEqual(true);
});
