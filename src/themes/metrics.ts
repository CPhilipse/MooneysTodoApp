import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const fonts = {
  title: {
    fontFamily: 'Sansita-Regular',
    fontSize: 28,
  },
  subtitle: {
    fontFamily: 'Sansita-Regular',
    fontSize: 20,
  },
  smallTitle: {
    fontFamily: 'Sansita-Bold',
    fontSize: 16,
  },
  regular: {
    fontFamily: 'Sansita-Regular',
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
    fontSize: 10,
  },
};

const padding = {
  horizontal: 20,
  vertical: 20,
};

const icons = {
  mini: 15,
  small: 20,
  medium: 25,
  big: 30,
  huge: 50,
};

export default {
  height,
  width,
  fonts,
  padding,
  icons,
};
