import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import HomeNavigator from '../SurveyForm/src/navigator/HomeNavigator';
import store, {persistor} from './src/redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import { Provider as PaperProvider } from 'react-native-paper';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
        <NavigationContainer>
          <HomeNavigator />
        </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
