import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { commonApi } from './api/commonApi';
import { setupListeners } from '@reduxjs/toolkit/query'
import authSlice from './slices/authSlice.js';


const rootReducer = combineReducers({
    [commonApi.reducerPath]: commonApi.reducer,
    auth: authSlice,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(commonApi.middleware),
    preloadedState: {},
    devTools: true,
});
setupListeners(store.dispatch);

export default store;
