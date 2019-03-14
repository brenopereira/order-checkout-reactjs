import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

import reducers from "./reducers";

const middlewares = [thunk, logger];

export default createStore(
  combineReducers({
    ...reducers
  }),
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
