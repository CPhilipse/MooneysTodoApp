import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as styles from './home.style';
import Pages from '../../enum/Pages';
import {colors, metrics} from '../../themes';
import Header from './components/Header';
import {HomeScreenNavigationProp} from '../../navigation/types/StackScreenProps';
import Icons from '../../enum/Icons';
import {Category, Todo} from '../../types/data';
import {showToast} from '../../utils/ToastUtils';
import {
  dbUpdateTodo,
  deleteCategory,
  getCategory,
  getTodo,
} from '../../utils/FirebaseUtils';

type Props = {
  navigation: HomeScreenNavigationProp | any;
  categories: Category[];
  removeCategory: any;
  setFinished: any;
  userId: string;
};

const Home = ({
  navigation,
  categories,
  removeCategory,
  setFinished,
  userId,
}: Props) => {
  const [data, setData] = useState(categories.length <= 0 ? [] : categories);

  useEffect(() => {
    setData(categories);
  }, [categories, categories.length]);

  const handleDeleteCategory = async (id: string) => {
    showToast('Succesvol de categorie verwijderd!');
    const categoryCollectionId: string = await getCategory(userId, id);
    deleteCategory(userId, categoryCollectionId);
    return removeCategory(id);
  };

  const handleFinishedTodo = async (id: string, todo: Todo) => {
    // Update isFinished of todo locally
    setFinished({catId: id, todoId: todo.id});

    // Update isFinished of todo in db
    const categoryCollectionId: string = await getCategory(userId, id);
    const todoCollectionId: string = await getTodo(
      userId,
      categoryCollectionId,
      todo.id,
    );
    await dbUpdateTodo(userId, categoryCollectionId, todoCollectionId, {
      id: todo.id,
      title: todo.title,
      description: todo.description,
      date: todo.date,
      note: todo.description,
      isFinished: !todo.isFinished,
      bg: todo.bg,
    });
  };

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
                  onPress={() => handleDeleteCategory(id)}>
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
                  onPress={() => {
                    navigation.navigate(Pages.ADD_TODO, {categoryId: id});
                  }}>
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
                        onPress={() => handleFinishedTodo(id, todo)}>
                        {todo.isFinished && (
                          <Icon
                            name={Icons.CLOSE}
                            size={metrics.icons.mini}
                            color={colors.palePurple}
                          />
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
