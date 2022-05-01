import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Pages from '../../enum/Pages';
import Home from '../../screens/Home';
import Drawer from '../../screens/Drawer';

const DrawerStack = createDrawerNavigator();

const DrawerNavigator = () => (
  <DrawerStack.Navigator drawerContent={props => <Drawer {...props} />}>
    <DrawerStack.Screen name={Pages.HOME} component={Home} />
  </DrawerStack.Navigator>
);

export default DrawerNavigator;
