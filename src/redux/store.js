import { createStore , applyMiddleware} from "redux";
import { counterReducer } from "./reducers/counterReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

export const store = createStore(counterReducer, composeWithDevTools(applyMiddleware(logger)));

