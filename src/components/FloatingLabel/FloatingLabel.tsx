import * as styles from './floatinglabel.style';
import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface Props {
  attrName: string;
  title: string;
  value: string;
  updateMasterState: (attrName: string, updateValue: string) => void;
  titleActiveSize?: number; // to control size of title when field is active
  titleInActiveSize?: number; // to control size of title when field is inactive
  titleActiveColor?: string; // to control color of title when field is active
  titleInactiveColor?: string; // to control color of title when field is active
  textInputStyles?: Record<string, unknown>;
  otherTextInputProps?: Record<string, unknown>;
}

const FloatingLabel = ({
  value,
  attrName,
  updateMasterState,
  titleActiveSize,
  titleInActiveSize,
  title,
  textInputStyles,
  otherTextInputProps,
}: Props) => {
  const position = useSharedValue(value ? 1 : 0);
  const [isFieldActive, setIsFieldActive] = useState(false);

  const _handleFocus = () => {
    if (!isFieldActive) {
      setIsFieldActive(true);
      position.value = withTiming(1, {duration: 150});
    }
  };

  const _handleBlur = () => {
    if (isFieldActive && !value) {
      setIsFieldActive(false);
      position.value = withTiming(0, {duration: 150});
    }
  };

  const _onChangeText = (updateValue: string) => {
    updateMasterState(attrName, updateValue);
  };

  const _returnAnimatedTitleStyles = useAnimatedStyle(() => {
    const top = interpolate(position.value, [0, 1], [14, 0]);

    return {
      top,
      fontSize: isFieldActive ? titleActiveSize : titleInActiveSize,
    };
  });

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.title, _returnAnimatedTitleStyles]}>
        {title}
      </Animated.Text>
      <TextInput
        value={value}
        style={[styles.textInput, textInputStyles]}
        underlineColorAndroid="transparent"
        onFocus={_handleFocus}
        onBlur={_handleBlur}
        onChangeText={_onChangeText}
        {...otherTextInputProps}
      />
    </View>
  );
};

export default FloatingLabel;
