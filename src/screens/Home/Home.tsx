import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import * as styles from './home.style';
import Pages from '../../enum/Pages';
import {colors, metrics} from '../../themes';
import Header from './components/Header';
import {HomeScreenNavigationProp} from '../../navigation/types/StackScreenProps';
import Icons from '../../enum/Icons';

// colors.palePurple and colors.lightBlue are really nice colors.

const dummyData = [
  {
    id: 'uuid',
    category: 'Homework',
    todos: [
      {
        title: 'Mobile Programming',
        description: 'Module IKPMD - need to program an app.',
        date: '2020-03-03T20:20:20Z',
        note: 'Do not forget to add java to the path environments, see the RN docs.',
        isFinished: false,
        bg: colors.lightBlue,
      },
      {
        title: 'Ethical Hacking',
        description: 'Module IKETHA - hacking!',
        date: '2020-03-03T20:20:20Z',
        note: 'Do not forget to add setup the metasploitable environment.',
        isFinished: false,
        bg: colors.palePurple,
      },
    ],
  },
  {
    id: 'uuid2',
    category: 'Apologetics',
    todos: [
      {
        title: 'Does God exist?',
        description: 'What is the evidence for God?',
        date: '2020-03-03T20:20:20Z',
        note: 'Research the arguments from Atheism and Christianity.',
        isFinished: false,
        bg: colors.palePurple,
      },
    ],
  },
  {
    id: 'uuid4',
    category: 'Categorie 3',
    todos: [
      {
        title: 'Does God exist?',
        description: 'What is the evidence for God?',
        date: '2020-03-03T20:20:20Z',
        note: 'Research the arguments from Atheism and Christianity.',
        isFinished: false,
        bg: colors.palePurple,
      },
    ],
  },
  {
    id: 'uuid4',
    category: 'Categorie 4',
    todos: [
      {
        title: 'Does God exist?',
        description: 'What is the evidence for God?',
        date: '2020-03-03T20:20:20Z',
        note: 'Research the arguments from Atheism and Christianity.',
        isFinished: false,
        bg: colors.palePurple,
      },
    ],
  },
  {
    id: 'uuid5',
    category: 'Categorie 5',
    todos: [
      {
        title: 'Does God exist?',
        description: 'What is the evidence for God?',
        date: '2020-03-03T20:20:20Z',
        note: 'Research the arguments from Atheism and Christianity.',
        isFinished: false,
        bg: colors.palePurple,
      },
    ],
  },
];

type Todo = {
  title: string;
  description: string;
  date: string;
  note: string;
  isFinished: boolean;
  bg: string;
};

type Category = {
  id: string;
  category: string;
  todos: Todo[];
};

type Props = {
  navigation: HomeScreenNavigationProp | any;
  categories: Category[];
  removeCategory: any;
};

const Home = ({navigation, categories, removeCategory}: Props) => {
  const [data, setData] = useState(categories.length <= 0 ? [] : categories);

  const finishTodo = () => {
    // TODO: update finished state from the store, so that'll update each card separately.
    // setIsFinishedState(!isFinishedState);
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
              <TouchableOpacity onPress={() => removeCategory(id)}>
                <Text
                  style={
                    styles.title
                  }>{`${category} (${todos.length}) VERWIJDEREN`}</Text>
              </TouchableOpacity>
              <ScrollView horizontal>
                <TouchableOpacity
                  style={styles.addTodoContainer}
                  onPress={() => navigation.navigate(Pages.TODO)}>
                  <Icon
                    name={Icons.ADD}
                    size={metrics.icons.huge}
                    color={colors.black}
                  />
                </TouchableOpacity>
                {todos.map(
                  ({title, description, date, isFinished, bg}, index) => {
                    return (
                      <TouchableOpacity
                        key={index}
                        style={[styles.todoContainer, {backgroundColor: bg}]}
                        onPress={() => navigation.navigate(Pages.TODO)}>
                        {isFinished && <View style={styles.finishedOverlay} />}
                        <Text style={styles.todoTitle}>{title}</Text>
                        <Text style={styles.todoDesc}>{description}</Text>
                        <Text style={styles.todoDate}>{date}</Text>
                        <TouchableOpacity
                          style={styles.finishedBtn}
                          onPress={finishTodo}>
                          <Text>{isFinished ? '-' : ''}</Text>
                        </TouchableOpacity>
                      </TouchableOpacity>
                    );
                  },
                )}
              </ScrollView>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Home;
