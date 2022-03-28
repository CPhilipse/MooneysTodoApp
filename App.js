import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {store, persistor} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Pages from './src/enum/Pages';
import Home from './src/screens/Home';
import Todo from './src/screens/Todo';
import Category from './src/screens/Category';

// TODO: Setup Redux and Persistence
// TODO: Make the design
// TODO: Make the functionality
const Stack = createNativeStackNavigator();

const screens = [
  {
    name: Pages.HOME,
    component: Home,
  },
  {
    name: Pages.TODO,
    component: Todo,
  },
  {
    name: Pages.CATEGORY,
    component: Category,
  },
];

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{flex: 1}}>
          <NavigationContainer>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <Stack.Navigator initialRouteName="Home">
              {screens.map(({name, component}, index) => {
                return (
                  <Stack.Screen
                    key={index}
                    name={name}
                    component={component}
                    options={{title: name, headerShown: false}}
                  />
                );
              })}
            </Stack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default App;
