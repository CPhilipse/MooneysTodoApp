import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import uuid from 'react-native-uuid';

import * as styles from './addtodo.style';
import {HomeScreenNavigationProp} from '../../navigation/types/StackScreenProps';
import FloatingLabel from '../../components/FloatingLabel';
import {showToast} from '../../utils/ToastUtils';
import {createTodo, getCategory} from '../../utils/FirebaseUtils';

type Props = {
  navigation: HomeScreenNavigationProp | any;
  route: any;
  addTodo: any;
  userId: any;
};

const AddTodo = ({navigation, route, addTodo, userId}: Props) => {
  const {categoryId} = route.params;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [note, setNote] = useState('');
  const [bg, setBg] = useState('');

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

  const handleTodo = async () => {
    const date = new Date();
    const unique_uuid = uuid.v4();
    await createTodo({
      userId,
      categoryId,
      todo: {
        id: unique_uuid,
        title,
        description,
        date: date.toDateString(),
        note,
        isFinished: false,
        bg,
      },
    });
    addTodo({
      catId: categoryId,
      todo: {
        id: unique_uuid,
        title,
        description,
        date: date.toDateString(),
        note,
        isFinished: false,
        bg,
      },
    });
    showToast('Succesvol todo toegevoegd!');
    return navigation.goBack();
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
        <TouchableOpacity style={styles.createBtn} onPress={handleTodo}>
          <Text style={styles.btnText}>Aanmaken</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}>
          <Text style={styles.btnText}>Terug</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTodo;
