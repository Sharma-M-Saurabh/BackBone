import { combineReducers, configureStore } from '@reduxjs/toolkit';
import SoftwareReducers from '../Reducers/SoftwareReducers';





const rootReducer = combineReducers({
    softwaretype : SoftwareReducers,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer ,
//   middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: {
        // ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //   },
    // }),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
