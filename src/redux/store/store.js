import {createStore, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userReducer from '../reducer/userReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  userInfo: persistReducer(persistConfig, userReducer),
});

const store = createStore(rootReducer);

export default store;
export const persistor = persistStore(store);
