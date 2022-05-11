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
  marginTop: metrics.padding.vertical,
};

export const inputContainer: ViewStyle = {
  paddingVertical: metrics.padding.vertical,
};

export const alignLoginBtn: ViewStyle = {
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignSelf: 'center',
};

export const btn: ViewStyle = {
  backgroundColor: colors.palePurple,
  width: '90%',
  height: 40,
  marginBottom: 10,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
};

export const btnText: TextStyle = {
  ...metrics.fonts.regularExtraBold,
  color: colors.black,
};

export const textLogin: TextStyle = {
  ...metrics.fonts.regularExtraBold,
  color: colors.white,
};

export const btnTextLogin: TextStyle = {
  ...metrics.fonts.regularExtraBold,
  color: colors.palePurple,
};
