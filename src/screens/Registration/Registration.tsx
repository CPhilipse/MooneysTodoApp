import React, {useCallback, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import * as styles from './registration.style';
import FloatingLabel from '../../components/FloatingLabel';
import Pages from '../../enum/Pages';
import {createUser} from '../../utils/FirebaseUtils';
import {AuthContext} from '../../store';

interface Props {
  navigation: any;
}

const Registration = ({navigation}: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {updateFlow} = React.useContext(AuthContext);

  const updateState = (attrName: string, value: string) => {
    if (attrName === 'email') {
      setEmail(value);
    }
    if (attrName === 'password') {
      setPassword(value);
    }
    if (attrName === 'confirm_password') {
      setConfirmPassword(value);
    }
  };

  const handleRegistration = useCallback(() => {
    createUser(email, password);
    return updateFlow(Pages.HOME);
  }, [email, password, updateFlow]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registratie</Text>

      <View style={styles.inputContainer}>
        <FloatingLabel
          attrName={'email'}
          title={'E-mail'}
          value={email}
          updateMasterState={updateState}
        />
        <FloatingLabel
          attrName={'password'}
          title={'Wachtwoord'}
          value={password}
          secureTextEntry
          updateMasterState={updateState}
        />
        <FloatingLabel
          attrName={'confirm_password'}
          title={'Bevestig wachtwoord'}
          value={confirmPassword}
          secureTextEntry
          updateMasterState={updateState}
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={handleRegistration}>
        <Text style={styles.btnText}>Registreren</Text>
      </TouchableOpacity>
      <View style={styles.alignLoginBtn}>
        <Text style={styles.textLogin}>Al een account? Ga naar </Text>
        <TouchableOpacity onPress={() => navigation.navigate(Pages.LOGIN)}>
          <Text style={styles.btnTextLogin}>inloggen!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Registration;
