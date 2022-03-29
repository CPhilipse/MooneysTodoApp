import * as styles from './addtodo.style';
import React from 'react';
import {View} from 'react-native';
import {HomeScreenNavigationProp} from '../../navigation/types/StackScreenProps';

type Props = {
  navigation: HomeScreenNavigationProp | any;
};

const AddTodo = ({navigation}: Props) => {
  return <View style={styles.container} />;
};

export default AddTodo;
