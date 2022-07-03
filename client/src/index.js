import ReactDOM from "react-dom";
/*** Initializing Redux  */
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

import "./index.css";
import App from "./App";
import dotenv from "dotenv";

dotenv.config();

/** Setting up Redux */
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
