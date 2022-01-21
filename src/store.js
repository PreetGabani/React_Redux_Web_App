import RootReducer from "../src/Redux/reducer/reducerindex"
import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persitConfig={
    key:'persist-store',
    storage
}
const PersistReducer = persistReducer(persitConfig,RootReducer)
const store = createStore(PersistReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const persistor = persistStore(store)
export default store;