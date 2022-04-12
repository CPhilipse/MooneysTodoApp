import {colors, metrics} from '../../themes';
import {TextStyle, ViewStyle} from 'react-native';

export const container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.black,
};

export const header: ViewStyle = {
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  margin: metrics.padding.horizontal,
};

export const headerTitle: TextStyle = {
  ...metrics.fonts.title,
  color: colors.white,
};

export const backBtn: ViewStyle = {
  width: metrics.scale(22),
  height: metrics.scale(22),
  borderRadius: 5,
  borderColor: colors.white,
  borderWidth: 1,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: metrics.verticalScale(5),
};

export const title: TextStyle = {
  ...metrics.fonts.title,
  color: colors.black,
};

export const desc: TextStyle = {
  ...metrics.fonts.regular,
  color: colors.black,
};

export const date: TextStyle = {
  ...metrics.fonts.smallRegular,
  marginTop: metrics.scale(10),
  color: colors.black,
};

export const list: ViewStyle = {
  marginHorizontal: metrics.padding.horizontal,
};

export const todo: ViewStyle = {
  padding: metrics.scale(10),
  borderRadius: 10,
  marginBottom: metrics.padding.vertical,
};
