import {TextStyle, ViewStyle} from 'react-native';
import {colors, metrics} from '../../themes';

export const container = {
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
  justifyContent: 'space-around',
  paddingHorizontal: metrics.padding.horizontal,
};

export const btn: ViewStyle = {
  backgroundColor: colors.palePurple,
  width: '31%',
  height: 40,
  // margin: metrics.padding.horizontal,
  marginTop: 5,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
};
export const btnText: TextStyle = {
  ...metrics.fonts.regularExtraBold,
  color: colors.black,
};
