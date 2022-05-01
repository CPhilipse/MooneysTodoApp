import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import * as styles from './login.style';
import FloatingLabel from '../../components/FloatingLabel';
import Pages from '../../enum/Pages';
import {signIn} from '../../utils/FirebaseUtils';
import {AuthContext} from '../../store';

interface Props {
  navigation: any;
}

const Login = ({navigation}: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {updateFlow} = React.useContext(AuthContext);

  const updateState = (attrName: string, value: string) => {
    if (attrName === 'email') {
      setEmail(value);
    }
    if (attrName === 'password') {
      setPassword(value);
    }
  };

  const handleSignIn = () => {
    signIn(email, password);
    return updateFlow(Pages.HOME);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inloggen</Text>

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
      </View>
      <TouchableOpacity style={styles.btn} onPress={handleSignIn}>
        <Text style={styles.btnText}>Inloggen</Text>
      </TouchableOpacity>
      <View style={styles.alignRegisterBtn}>
        <Text style={styles.textRegister}>Nog geen account? Ga je </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(Pages.REGISTRATION)}>
          <Text style={styles.btnTextRegister}>registreren!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
