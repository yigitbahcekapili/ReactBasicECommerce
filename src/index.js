import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "alertifyjs/build/css/alertify.min.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./store/reducers/";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

const rootComponent = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(rootComponent, document.getElementById("root"));
