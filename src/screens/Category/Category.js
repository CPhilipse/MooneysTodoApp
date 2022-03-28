import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import * as styles from './category.style';

const Category = ({navigation, route}) => {
  const {category, todos} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>{category}</Text>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}>
        <Text>X</Text>
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.list}>
          {todos.map(({title, description, date, bg}, i) => {
            return (
              <View key={i} style={[styles.todo, {backgroundColor: bg}]}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.desc}>{description}</Text>
                <Text style={styles.date}>{date}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Category;
