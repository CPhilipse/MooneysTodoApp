import * as styles from './addcategory.style';
import React, {useCallback, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {HomeScreenNavigationProp} from '../../navigation/types/StackScreenProps';
import FloatingLabel from '../../components/FloatingLabel';
import uuid from 'react-native-uuid';
import {showToast} from '../../utils/ToastUtils';
import {createCategory} from '../../utils/FirebaseUtils';

type Props = {
  navigation: HomeScreenNavigationProp | any;
  addCategory: any;
  userId: string;
};

const AddCategory = ({navigation, addCategory, userId}: Props) => {
  const [category, setCategory] = useState('');

  const _updateMasterState = (attrName: string, value: string) => {
    if (attrName === 'category') {
      setCategory(value);
    }
  };

  const handleCategory = useCallback(() => {
    const id = uuid.v4();
    addCategory({id, category, todos: []});
    createCategory(userId, {id, category});

    showToast('Succesvol een categorie toegevoegd!');
    return navigation.goBack();
  }, [addCategory, category, navigation, userId]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Maak een Categorie</Text>
      </View>
      <FloatingLabel
        attrName="category"
        title="Categorie"
        value={category}
        updateMasterState={_updateMasterState}
      />
      <View style={styles.btnsContainer}>
        <TouchableOpacity style={styles.btn} onPress={handleCategory}>
          <Text style={styles.btnText}>Aanmaken</Text>
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

export default AddCategory;
