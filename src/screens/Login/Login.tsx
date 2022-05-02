import React, {useCallback, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import * as styles from './login.style';
import FloatingLabel from '../../components/FloatingLabel';
import Pages from '../../enum/Pages';
import {signIn} from '../../utils/FirebaseUtils';
import {AuthContext} from '../../store';
import {Category, Todo} from '../../types/data';

interface Props {
  navigation: any;
  login: any;
  addCategory: any;
  addTodo: any;
}

const Login = ({navigation, login, addCategory, addTodo}: Props) => {
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

  // TODO: fill local storage with todos from loggedin account
  const handleSignIn = useCallback(async () => {
    const {userId, categories, todos} = await signIn(email, password);

    // Add user details to local storage
    login({user: {userId, email, isLoggedIn: true}});

    // Add categories from cloud to local storage for UI
    categories.map(({id, category}: Category) => {
      addCategory({id, category, todos: []});
    });

    // Add todos from cloud to categories in local storage for UI
    console.log('LOGIN todos: ', todos, todos.length);
    todos.map(
      ({
        categoryId,
        id,
        title,
        description,
        date,
        note,
        isFinished,
        bg,
      }: Todo) => {
        console.log('>> In map for adding todo')
        addTodo({
          catId: categoryId,
          todo: {
            id,
            title,
            description,
            date,
            note,
            isFinished,
            bg,
          },
        });
      },
    );
    return updateFlow(Pages.HOME);
  }, [email, login, password, updateFlow]);

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
