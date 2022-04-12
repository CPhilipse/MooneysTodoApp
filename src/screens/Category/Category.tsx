import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import * as styles from './category.style';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from '../../enum/Icons';
import {colors, metrics} from '../../themes';
import {Todo} from '../../types/data';
import Pages from '../../enum/Pages';

type Props = {
  navigation: any;
  route: any;
};

const Category = ({navigation, route}: Props) => {
  const {catId, category, todos} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{category}</Text>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}>
          <Icon
            name={Icons.CLOSE}
            size={metrics.icons.mini}
            color={colors.palePurple}
          />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.list}>
        {todos.map((todo: Todo, i: number) => {
          return (
            <TouchableOpacity
              key={i}
              style={[styles.todo, {backgroundColor: todo.bg}]}
              onPress={() =>
                navigation.navigate(Pages.TODO, {
                  catId,
                  todo,
                  fromCatPage: true,
                })
              }>
              <Text style={styles.title}>{todo.title}</Text>
              <Text style={styles.desc}>{todo.description}</Text>
              <Text style={styles.date}>{todo.date}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Category;
