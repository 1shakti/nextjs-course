
import { createStore,applyMiddleware } from "react-redux";
import rootReducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";
import rootSaga from "./saga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare()))
)

const persistor = persistStore(store);
sagaMiddleWare.run(rootSaga);

export default store;
export { store, persistor };