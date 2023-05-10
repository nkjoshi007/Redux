import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"
import Reducers from "./Combined";

export const Store = createStore(Reducers,{},applyMiddleware(thunk))