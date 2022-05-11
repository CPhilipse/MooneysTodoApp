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
  justifyContent: 'space-evenly',
};

export const btn: ViewStyle = {
  backgroundColor: colors.palePurple,
  width: '26.5%',
  height: 40,
  marginTop: 5,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
};
export const btnText: TextStyle = {
  ...metrics.fonts.regularExtraBold,
  color: colors.black,
};
