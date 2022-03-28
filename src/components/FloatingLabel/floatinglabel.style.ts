import {TextStyle, ViewStyle} from 'react-native';
import {colors, metrics} from '../../themes';

export const container: ViewStyle = {
  width: '90%',
  borderRadius: 10,
  borderStyle: 'solid',
  borderWidth: 1,
  height: 50,
  marginVertical: 4,
  alignSelf: 'center',
  backgroundColor: colors.midWhite,
};

export const textInput: TextStyle = {
  fontSize: 15,
  marginTop: 10,
  marginLeft: 5,
  color: colors.black,
  ...metrics.fonts.regular,
};

export const title: TextStyle = {
  ...metrics.fonts.regular,
  position: 'absolute',
  left: 9,
  color: colors.darkGrey,
};
