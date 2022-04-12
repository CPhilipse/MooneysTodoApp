import {TextStyle, ViewStyle} from 'react-native';
import {colors, metrics} from '../../themes';

export const container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.black,
};

export const titleContainer: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  padding: metrics.padding.horizontal,
};

export const title: TextStyle = {
  ...metrics.fonts.title,
  color: colors.white,
};

export const btnsContainer: ViewStyle = {
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignSelf: 'center',
};

export const createBtn: ViewStyle = {
  backgroundColor: colors.palePurple,
  width: '40%',
  height: 40,
  margin: metrics.padding.horizontal,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
};

export const backBtn: ViewStyle = {
  backgroundColor: colors.palePurple,
  width: '40%',
  height: 40,
  margin: metrics.padding.horizontal,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
};

export const btnText: TextStyle = {
  ...metrics.fonts.regularExtraBold,
  color: colors.black,
};
