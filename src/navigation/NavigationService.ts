import React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';

export const navigationRef: React.RefObject<NavigationContainerRef<any>> =
  React.createRef();

export default class NavigationService {
  static navigate(name: string, params?: object) {
    navigationRef.current?.navigate(name, params);
  }
}
