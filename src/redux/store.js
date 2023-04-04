import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import brandsReducer from "./brandsReducer";
import storage from 'redux-persist/lib/storage'
import { combineReducers } from "redux";

import {
    persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
} from "redux-persist";


const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    brands: brandsReducer
});

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

const persistor = persistStore(store);


export { persistor, store }