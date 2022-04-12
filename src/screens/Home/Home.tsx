import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as styles from './home.style';
import Pages from '../../enum/Pages';
import {colors, metrics} from '../../themes';
import Header from './components/Header';
import {HomeScreenNavigationProp} from '../../navigation/types/StackScreenProps';
import Icons from '../../enum/Icons';
import {Category} from '../../types/data';

type Props = {
  navigation: HomeScreenNavigationProp | any;
  categories: Category[];
  removeCategory: any;
  setFinished: boolean;
};

const Home = ({navigation, categories, removeCategory, setFinished}: Props) => {
  const [data, setData] = useState(categories.length <= 0 ? [] : categories);

  useEffect(() => {
    setData(categories);
  }, [categories, categories.length]);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} data={data} />

      <ScrollView>
        {data.length <= 0 && (
          <>
            <Text style={styles.noData}>Er zijn geen todos</Text>
            <Text style={styles.noDataSubtitle}>
              Klik op het plusje hierboven om toe te voegen.
            </Text>
          </>
        )}
        {data.map(({id, category, todos}, i) => {
          return (
            <View key={i} style={styles.row}>
              <View style={styles.titleRow}>
                <Text
                  style={styles.title}>{`${category} (${todos.length})`}</Text>
                <TouchableOpacity
                  style={styles.deleteBtn}
                  onPress={() => removeCategory(id)}>
                  <Icon
                    name={Icons.TRASH}
                    size={metrics.icons.mini}
                    color={colors.palePurple}
                  />
                </TouchableOpacity>
              </View>
              <ScrollView horizontal>
                <TouchableOpacity
                  style={styles.addTodoContainer}
                  onPress={() =>
                    navigation.navigate(Pages.ADD_TODO, {categoryId: id})
                  }>
                  <Icon
                    name={Icons.ADD}
                    size={metrics.icons.huge}
                    color={colors.black}
                  />
                </TouchableOpacity>
                {todos.map((todo, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={[styles.todoContainer, {backgroundColor: todo.bg}]}
                      onPress={() =>
                        navigation.navigate(Pages.TODO, {todo, catId: id})
                      }>
                      {todo.isFinished && (
                        <View style={styles.finishedOverlay} />
                      )}
                      <Text style={styles.todoTitle}>{todo.title}</Text>
                      <Text style={styles.todoDesc}>{todo.description}</Text>
                      <Text style={styles.todoDate}>{todo.date}</Text>
                      <TouchableOpacity
                        style={styles.finishedBtn}
                        onPress={() =>
                          setFinished({catId: id, todoId: todo.id})
                        }>
                        {todo.isFinished ? (
                          <Icon
                            name={Icons.CLOSE}
                            size={metrics.icons.mini}
                            color={colors.palePurple}
                          />
                        ) : (
                          <></>
                        )}
                      </TouchableOpacity>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Home;
