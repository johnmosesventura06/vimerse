import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootreducer";
import storePersist from "./storePersist";
import thunk from "redux-thunk";
// import { createLogger } from "redux-logger";

// const logger = createLogger();
let middleware = [thunk];

let configStore = applyMiddleware(...middleware);

if (process.env.NODE_ENV === "development") {
    // middleware = [...middleware, logger];
    // configStore = composeEnhancers(applyMiddleware(...middleware));
  }
const initialState = storePersist.get("auth")
  ? { auth: storePersist.get("auth") }
  : {};

const store = createStore(rootReducer, initialState,configStore);

export default store;