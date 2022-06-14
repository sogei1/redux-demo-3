import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";

import { postsReducer } from "./reducers/postsReducer";
import { usersReducer } from "./reducers/usersReducer";

const reducers = combineReducers({
    posts: postsReducer,
    users: usersReducer
});

const persistConfig = {
    key: 'myPersistKey',
    storage
}

const persistedReducers = persistReducer(persistConfig, reducers);

//const enhancer = (window !== undefined && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
//const store = createStore(persistedReducers, enhancer(applyMiddleware(thunk)));

const store = configureStore({ reducer: persistedReducers, middleware: [ thunk ] });
const persistStorage = persistStore(store);

export default { store, persistStorage };