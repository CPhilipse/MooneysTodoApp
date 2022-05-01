import {TextStyle, ViewStyle} from 'react-native';
import {colors, metrics} from '../../themes';

export const container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.black,
};

export const title: TextStyle = {
  ...metrics.fonts.title,
  color: colors.white,
  alignSelf: 'center',
  marginTop: metrics.padding.vertical
};

export const inputContainer: ViewStyle = {
  paddingVertical: metrics.padding.vertical,
};

export const alignRegisterBtn: ViewStyle = {
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignSelf: 'center',
};

export const btn: ViewStyle = {
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

export const textRegister: TextStyle = {
  ...metrics.fonts.regularExtraBold,
  color: colors.white,
};

export const btnTextRegister: TextStyle = {
  ...metrics.fonts.regularExtraBold,
  color: colors.palePurple,
};
