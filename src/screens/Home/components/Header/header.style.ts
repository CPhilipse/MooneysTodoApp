import {colors, metrics} from '../../../../themes';
import {TextStyle, ViewStyle} from 'react-native';

export const container: ViewStyle = {
  marginVertical: metrics.padding.vertical,
  marginLeft: metrics.padding.horizontal,
  paddingRight: metrics.padding.horizontal,
};

export const categoryContainer: ViewStyle = {
  backgroundColor: colors.palePurple,
  borderRadius: metrics.scale(5),
  marginRight: metrics.padding.horizontal,
  paddingHorizontal: metrics.scale(10),
  paddingVertical: metrics.verticalScale(5),
  justifyContent: 'center',
  alignItems: 'center',
};

export const category: TextStyle = {
  ...metrics.fonts.smallBold,
  color: colors.black,
  alignSelf: 'center',
};

export const line: ViewStyle = {
  borderBottomWidth: 0.5,
  borderColor: colors.borderGrey,
};
