import React, {useState} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import * as styles from './todo.style';
import FloatingLabel from '../../components/FloatingLabel';

interface Props {
  navigation: any;
}

const Todo = ({navigation}: Props) => {
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
        <TouchableOpacity
          style={styles.createBtn}
          onPress={() => navigation.goBack()}>
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

export default Todo;
