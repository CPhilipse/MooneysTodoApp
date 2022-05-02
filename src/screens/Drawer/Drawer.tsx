import React, {useCallback} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import * as styles from './drawer.style';
import {signOut} from '../../utils/FirebaseUtils';
import Pages from '../../enum/Pages';
import {AuthContext} from '../../store';

type Props = {
  email: string;
  logout: any;
  clearAllTodos: any;
};

const Drawer = ({email, logout, clearAllTodos}: Props) => {
  const {updateFlow} = React.useContext(AuthContext);

  const handleSignOut = useCallback(() => {
    signOut();
    logout();
    clearAllTodos();
    updateFlow(Pages.LOGIN);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hallo {email}</Text>
      <TouchableOpacity style={styles.sgnOutBtn} onPress={handleSignOut}>
        <Text style={styles.btnText}>Uitloggen</Text>
      </TouchableOpacity>
      <Text style={styles.version}>Versie 1.0</Text>
    </View>
  );
};

export default Drawer;
