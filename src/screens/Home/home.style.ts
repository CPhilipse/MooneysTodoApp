import {colors, metrics} from '../../themes';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

export const container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.black,
  // by making styles with consts we make iterate styles in other const styles like this.
  // ...base_style,
};

export const row: ViewStyle = {
  marginTop: metrics.scale(15),
};

export const titleRow: ViewStyle = {
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
};

export const title: TextStyle = {
  ...metrics.fonts.smallTitle,
  marginHorizontal: metrics.padding.horizontal,
  color: colors.white,
};

export const deleteBtn: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  width: metrics.scale(20),
  height: metrics.scale(20),
  borderRadius: metrics.scale(20) / 2,
  backgroundColor: colors.red,
  marginHorizontal: metrics.padding.horizontal,
};

export const todoContainer: ViewStyle = {
  backgroundColor: colors.palePurple,
  width: metrics.scale(155),
  height: metrics.scale(100),
  marginHorizontal: metrics.padding.horizontal,
  marginVertical: metrics.scale(8),
  borderRadius: metrics.scale(10),
};

export const addTodoContainer: ViewStyle = {
  ...todoContainer,
  alignItems: 'center',
  justifyContent: 'center',
};

export const todoTitle: TextStyle = {
  ...metrics.fonts.regular,
  color: colors.black,
  marginLeft: metrics.scale(10),
  marginTop: metrics.scale(10),
};

export const todoDesc: TextStyle = {
  ...metrics.fonts.smallRegular,
  color: colors.black,
  marginLeft: metrics.scale(10),
  marginTop: metrics.scale(3),
};

export const todoDate: TextStyle = {
  ...metrics.fonts.smallRegular,
  color: colors.black,
  position: 'absolute',
  left: metrics.scale(10),
  bottom: metrics.scale(10),
};

export const finishedBtn: ViewStyle = {
  width: metrics.scale(20),
  height: metrics.scale(20),
  position: 'absolute',
  right: metrics.scale(7),
  bottom: metrics.scale(7),
  borderRadius: metrics.scale(20) / 2,
  borderWidth: 1.5,
  borderColor: colors.darkBlack,
  alignItems: 'center',
  justifyContent: 'center',
};

export const finishedOverlay: ViewStyle = {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: colors.black,
  opacity: 0.4,
};

export const noData: TextStyle = {
  ...metrics.fonts.title,
  color: colors.white,
  alignSelf: 'center',
  marginVertical: metrics.padding.vertical,
};

export const noDataSubtitle: TextStyle = {
  ...metrics.fonts.regular,
  color: colors.white,
  alignSelf: 'center',
};

export const scrollView: ViewStyle = {
  paddingBottom: metrics.padding.vertical
}
