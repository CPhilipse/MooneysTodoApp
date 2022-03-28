import {colors, metrics} from '../../themes';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

export const container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.black,
  // by making styles with consts we make iterate styles in other const styles like this.
  // ...base_style,
};

export const row: ViewStyle = {height: 200, marginTop: 20};

export const title: TextStyle = {
  ...metrics.fonts.title,
  marginHorizontal: metrics.padding.horizontal,
};

export const todoContainer: ViewStyle = {
  backgroundColor: colors.palePurple,
  width: 200,
  height: 120,
  margin: 20,
  borderRadius: 10,
};

export const addTodoContainer: ViewStyle = {
  ...todoContainer,
  alignItems: 'center',
  justifyContent: 'center',
};

export const todoTitle: TextStyle = {
  ...metrics.fonts.regular,
  color: colors.black,
  marginLeft: 10,
  marginTop: 10,
};

export const todoDesc: TextStyle = {
  ...metrics.fonts.smallRegular,
  color: colors.black,
  marginLeft: 10,
  marginTop: 3,
};

export const todoDate: TextStyle = {
  ...metrics.fonts.smallRegular,
  color: colors.black,
  position: 'absolute',
  left: 10,
  bottom: 10,
};

export const finishedBtn: ViewStyle = {
  width: 30,
  height: 30,
  position: 'absolute',
  right: 10,
  bottom: 10,
  borderRadius: 15,
  borderWidth: 1.5,
  borderColor: colors.darkBlack,
  alignItems: 'center',
  justifyContent: 'center',
};

const baseOptionsBtn: ViewStyle = {
  width: 60,
  height: 60,
  backgroundColor: colors.black,
  borderColor: colors.white,
  borderWidth: 1,
  borderRadius: 30,
  position: 'absolute',
  bottom: 30,
  right: 30,
  justifyContent: 'center',
  alignItems: 'center',
};

export const optionsBtn: ViewStyle = {
  ...baseOptionsBtn,
  zIndex: 9,
};

export const finishedOverlay: ViewStyle = {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: colors.black,
  opacity: 0.4,
};
