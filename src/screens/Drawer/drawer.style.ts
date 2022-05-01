import {TextStyle, ViewStyle} from 'react-native';
import {colors, metrics} from '../../themes';

export const container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.black,
};

export const title: TextStyle = {
  ...metrics.fonts.title,
  color: colors.white,
  padding: metrics.padding.horizontal,
};

export const sgnOutBtn: ViewStyle = {
  backgroundColor: colors.palePurple,
  height: 40,
  marginHorizontal: metrics.padding.horizontal,
  marginBottom: metrics.padding.horizontal,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
};

export const btnText: TextStyle = {
  ...metrics.fonts.regularExtraBold,
  color: colors.black,
};

export const version: TextStyle = {
  ...metrics.fonts.smallRegular,
  color: colors.white,
  paddingHorizontal: metrics.padding.horizontal,
  alignSelf: 'flex-end',
};
