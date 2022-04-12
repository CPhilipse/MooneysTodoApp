import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

// Guideline sizes are based on standard ~5" screen mobile device
// src: https://github.com/nirsky/react-native-size-matters/blob/master/examples/BlogPost/README.md
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor: number = 0.5) =>
  size + (scale(size) - size) * factor;

const fonts = {
  title: {
    fontFamily: 'Sansita-Regular',
    fontSize: moderateScale(23),
  },
  subtitle: {
    fontFamily: 'Sansita-Regular',
    fontSize: moderateScale(20),
  },
  smallTitle: {
    fontFamily: 'Sansita-Bold',
    fontSize: moderateScale(16),
  },
  regular: {
    fontFamily: 'Sansita-Regular',
    fontSize: moderateScale(14),
  },
  regularBold: {
    fontFamily: 'Sansita-Bold',
  },
  regularExtraBold: {
    fontFamily: 'Sansita-ExtraBold',
  },
  regularItalic: {
    fontFamily: 'Sansita-Italic',
  },
  smallRegular: {
    fontFamily: 'Sansita-Regular',
    fontSize: moderateScale(11),
  },
  smallBold: {
    fontFamily: 'Sansita-Bold',
    fontSize: moderateScale(12),
  },
};

const padding = {
  horizontal: scale(17),
  vertical: verticalScale(17),
};

const icons = {
  mini: scale(12),
  small: scale(17),
  medium: scale(22),
  big: scale(27),
  huge: scale(47),
};

export default {
  height,
  width,
  fonts,
  padding,
  icons,
  scale,
  verticalScale,
  moderateScale,
};
