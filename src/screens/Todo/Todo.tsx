import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import * as styles from './todo.style';
import FloatingLabel from '../../components/FloatingLabel';
import Pages from '../../enum/Pages';
import {showToast} from '../../utils/ToastUtils';
import {
  dbUpdateTodo,
  deleteTodo,
  getCategory,
  getTodo,
} from '../../utils/FirebaseUtils';

interface Props {
  navigation: any;
  route: any;
  removeTodo: any;
  updateTodo: any;
  userId: any;
}

const Todo = ({navigation, route, removeTodo, updateTodo, userId}: Props) => {
  const {todo, catId, fromCatPage} = route.params;

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

  const handleRemoval = async () => {
    // Delete todo from cloud/firestore/firebase/db
    const categoryCollectionId: string = await getCategory(userId, catId);
    const todoCollectionId: string = await getTodo(
      userId,
      categoryCollectionId,
      todo.id,
    );
    deleteTodo(userId, categoryCollectionId, todoCollectionId);

    // Delete todo locally for UI
    removeTodo({todoId: todo.id, catId});
    showToast('Succesvol de todo verwijderd!');
    fromCatPage ? navigation.navigate(Pages.HOME) : navigation.goBack();
  };

  const handleUpdate = async () => {
    const categoryCollectionId: string = await getCategory(userId, catId);
    const todoCollectionId: string = await getTodo(
      userId,
      categoryCollectionId,
      todo.id,
    );
    await dbUpdateTodo(userId, categoryCollectionId, todoCollectionId, {
      id: todo.id,
      title,
      description,
      date: todo.date,
      note,
      isFinished: todo.isFinished,
      bg,
    });

    // Update todo locally
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
    showToast('Succesvol de todo geüpdatet!');
    fromCatPage ? navigation.navigate(Pages.HOME) : navigation.goBack();
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
