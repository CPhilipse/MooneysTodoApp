import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {store, persistor} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Pages from './src/enum/Pages';
import Todo from './src/screens/Todo';
import Category from './src/screens/Category';
import AddCategory from './src/screens/AddCategory';
import AddTodo from './src/screens/AddTodo';
import Registration from './src/screens/Registration';
import Login from './src/screens/Login';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './src/store';
import {navigationRef} from './src/navigation/NavigationService';
import DrawerNavigator from './src/navigation/Navigators/DrawerNavigator';

const Stack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();

const loginScreens = [
  {
    name: Pages.LOGIN,
    component: Login,
  },
  {
    name: Pages.REGISTRATION,
    component: Registration,
  },
];

const screens = [
  {
    name: Pages.TODO,
    component: Todo,
  },
  {
    name: Pages.CATEGORY,
    component: Category,
  },
  {
    name: Pages.ADD_CATEGORY,
    component: AddCategory,
  },
  {
    name: Pages.ADD_TODO,
    component: AddTodo,
  },
];

const getActiveFlow = (activeFlow: string) => {
  if (activeFlow === Pages.LOGIN) {
    return <LoginNavigation />;
  }
  if (activeFlow === Pages.HOME) {
    return <MainNavigation />;
  }
};

export const MainNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{title: Pages.DRAWER, headerShown: false}}
      name={Pages.DRAWER}>
      {props => <DrawerNavigator {...props} />}
    </Stack.Screen>
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
);

export const LoginNavigation = () => (
  <LoginStack.Navigator>
    {loginScreens.map(({name, component}) => (
      <LoginStack.Screen
        key={name}
        name={name}
        component={component}
        options={{title: name, headerShown: false}}
      />
    ))}
  </LoginStack.Navigator>
);

const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [userState, setUserState] = useState();
  const [activeFlow, setFlow] = useState(Pages.LOGIN);

  // Handle user state changes
  const onAuthStateChanged = (user: any) => {
    setUserState(user);
    setFlow(!user ? Pages.LOGIN : Pages.HOME);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const authContext = React.useMemo(
    () => ({
      updateFlow: (flow: string) => setFlow(flow),
    }),
    [],
  );

  if (initializing) {
    return null;
  }

  return (
    <Provider store={store}>
      <AuthContext.Provider value={authContext}>
        <PersistGate loading={null} persistor={persistor}>
          <GestureHandlerRootView style={{flex: 1}}>
            <NavigationContainer ref={navigationRef}>
              <StatusBar barStyle={'light-content'} />
              {getActiveFlow(activeFlow)}
            </NavigationContainer>
          </GestureHandlerRootView>
        </PersistGate>
      </AuthContext.Provider>
    </Provider>
  );
};

export default App;
