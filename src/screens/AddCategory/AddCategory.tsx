import * as styles from './addcategory.style';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {HomeScreenNavigationProp} from '../../navigation/types/StackScreenProps';
import FloatingLabel from '../../components/FloatingLabel';
import uuid from 'react-native-uuid';
import {showToast} from '../../utils/ToastUtils';

type Props = {
  navigation: HomeScreenNavigationProp | any;
  addCategory: any;
};

const AddCategory = ({navigation, addCategory}: Props) => {
  const [category, setCategory] = useState('');

  const _updateMasterState = (attrName: string, value: string) => {
    if (attrName === 'category') {
      setCategory(value);
    }
  };

  const handleCategory = () => {
    addCategory({id: uuid.v4(), category, todos: []});
    showToast('Succesvol een categorie toegevoegd!');
    return navigation.goBack();
  };

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
        <TouchableOpacity style={styles.createBtn} onPress={handleCategory}>
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

export default AddCategory;
