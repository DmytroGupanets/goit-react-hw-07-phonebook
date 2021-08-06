import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
});

export default store;

// ================== To be kept for next hw =============================
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "contactsInfo",
//   storage,
//   blacklist: ["filter"],
// };

// const store = configureStore({
//   reducer: { contacts: persistReducer(persistConfig, rootReducer) },

//   middleware: getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// });

// const persistor = persistStore(store);

// const reduxStore = { store, persistor };

// export default reduxStore;
