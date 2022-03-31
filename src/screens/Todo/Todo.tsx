import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import * as styles from './todo.style';
import FloatingLabel from '../../components/FloatingLabel';

interface Props {
  navigation: any;
  route: any;
  removeTodo: any;
  updateTodo: any;
}

const Todo = ({navigation, route, removeTodo, updateTodo}: Props) => {
  const {todo, catId} = route.params;

  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [note, setNote] = useState(todo.note);
  const [bg, setBg] = useState(todo.bg);

  const _updateMasterState = (attrName: string, value: string) => {
    if (attrName === 'title') {
      setTitle(value);
    }
    if (attrName === 'description') {
      setDescription(value);
    }
    if (attrName === 'note') {
      setNote(value);
    }
    if (attrName === 'bg') {
      setBg(value);
    }
  };

  const handleRemoval = () => {
    removeTodo({todoId: todo.id, catId});
    navigation.goBack();
  };

  const handleUpdate = () => {
    updateTodo({
      todoId: todo.id,
      catId,
      updatedTodo: {
        id: todo.id,
        title,
        description,
        date: todo.date,
        note,
        isFinished: todo.isFinished,
        bg,
      },
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Maak een TODO</Text>
      </View>
      <FloatingLabel
        attrName="title"
        title="Titel"
        value={title}
        updateMasterState={_updateMasterState}
      />
      <FloatingLabel
        attrName="description"
        title="Descriptie"
        value={description}
        updateMasterState={_updateMasterState}
      />
      <FloatingLabel
        attrName="note"
        title="Notitie"
        value={note}
        updateMasterState={_updateMasterState}
      />
      <FloatingLabel
        attrName="bg"
        title="Achtergrond kleur"
        value={bg}
        updateMasterState={_updateMasterState}
      />
      <View style={styles.btnsContainer}>
        <TouchableOpacity style={styles.btn} onPress={handleUpdate}>
          <Text style={styles.btnText}>Updaten</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={handleRemoval}>
          <Text style={styles.btnText}>Verwijderen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.goBack()}>
          <Text style={styles.btnText}>Terug</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Todo;
