import {colors, metrics} from '../../themes';

export const container = {
  flex: 1,
  backgroundColor: colors.black,
};

export const headerTitle = {
  ...metrics.fonts.title,
  margin: metrics.padding.horizontal,
};

export const backBtn = {
  position: 'absolute',
  right: 20,
  top: 20,
};

export const title = {
  ...metrics.fonts.title,
  color: colors.black,
};

export const desc = {
  ...metrics.fonts.regular,
  color: colors.black,
};

export const date = {
  ...metrics.fonts.smallRegular,
  color: colors.black,
};

export const list = {
  marginHorizontal: metrics.padding.horizontal,
};

export const todo = {
  padding: 10,
  borderRadius: 10,
  marginBottom: metrics.padding.vertical,
};
