import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Category, Todo, User} from '../types/data';

export const createUser: any = async (email: string, password: string) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
    console.log('User account created & signed in!');

    const user: any = await addUser({email, password});
    return user.id;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  }
};

export const signIn: any = async (email: string, password: string) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
    const userId = await getUser(email);
    const categories = await getAllCategories(userId);
    const todos = await getAllTodos(userId, categories);
    console.log('Signed in!', userId);
    return {userId, categories, todos};
  } catch (error) {
    console.error('Sign in error: ', error);
  }
};

export const signOut = () => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
};

export const deleteTodo = (
  userCollectionId: string,
  categoryCollectionId: string,
  todoCollectionId: string,
) => {
  firestore()
    .collection(
      `users/${userCollectionId}/categories/${categoryCollectionId}/todos`,
    )
    .doc(todoCollectionId)
    .delete()
    .then(() => {
      console.log('Todo deleted!');
    });
};

export const getTodo = async (
  userId: string,
  categoryCollectionId: string,
  todoId: string,
) => {
  return await firestore()
    .collection(`users/${userId}/categories/${categoryCollectionId}/todos`)
    .where('id', '==', todoId)
    .get()
    .then(querySnapshot => {
      return querySnapshot.docs[0].id; // collectionId
    });
};

export const dbUpdateTodo = async (
  userId: string,
  categoryCollectionId: string,
  todoCollectionId: string,
  updatedTodo: Todo,
) => {
  return await firestore()
    .collection(`users/${userId}/categories/${categoryCollectionId}/todos`)
    // Filter results
    .doc(todoCollectionId)
    .update({...updatedTodo})
    .then(() => {
      console.log('Todo updated');
    });
};

export const getAllTodos: any = async (
  userId: string,
  categories: Category[],
) => {
  const allTodos: any = [];
  for (let i = 0; i < categories.length; i++) {
    const categoryCollectionId = await getCategory(userId, categories[i].id);
    await firestore()
      .collection(`users/${userId}/categories/${categoryCollectionId}/todos`)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach((documentSnapshot: any) => {
          allTodos.unshift({
            categoryId: categories[i].id,
            id: documentSnapshot._data.id,
            title: documentSnapshot._data.title,
            description: documentSnapshot._data.description,
            note: documentSnapshot._data.note,
            date: documentSnapshot._data.date,
            isFinished: documentSnapshot._data.isFinished,
            bg: documentSnapshot._data.bg,
          });
        });
      });
  }
  return allTodos;
};

type CreateTodo = {
  userId: string;
  categoryId: string;
  todo: Todo;
};
export const createTodo = async ({userId, categoryId, todo}: CreateTodo) => {
  const categoryCollectionId = await getCategory(userId, categoryId);
  firestore()
    .collection(`users/${userId}/categories/${categoryCollectionId}/todos`)
    .add({
      id: todo.id,
      title: todo.title,
      description: todo.description,
      note: todo.note,
      date: todo.date,
      isFinished: todo.isFinished,
      bg: todo.bg,
    })
    .then(() => {
      console.log('Todo added!');
    });
};

export const deleteCategory = (
  userId: string,
  categoryCollectionId: string,
) => {
  firestore()
    .collection(`users/${userId}/categories`)
    .doc(categoryCollectionId)
    .delete()
    .then(() => {
      console.log('Category deleted!');
    });
};

export const getAllCategories = async (userId: string) => {
  return await firestore()
    .collection(`users/${userId}/categories`)
    .get()
    .then(querySnapshot => {
      const categories: any[] = [];
      querySnapshot.forEach((documentSnapshot: any) => {
        categories.unshift({
          id: documentSnapshot._data.id,
          category: documentSnapshot._data.category,
        });
      });
      return categories;
    });
};

export const getCategory = async (userId: string, categoryId: string) => {
  return await firestore()
    .collection(`users/${userId}/categories`)
    // Filter results
    .where('id', '==', categoryId)
    .get()
    .then(querySnapshot => {
      const collectionId = querySnapshot.docs[0].id;
      console.log('GetCategory() - collectionId: ', collectionId);
      return collectionId;
    });
};

export const createCategory = (
  userId: string,
  category: {id: string | number[]; category: string},
) => {
  firestore()
    .collection(`users/${userId}/categories`)
    .add({
      id: category.id,
      category: category.category,
    })
    .then(() => {
      console.log('Category added!');
    });
};

export const getUser = async (email: string) => {
  return await firestore()
    .collection('users')
    // Filter results
    .where('email', '==', email)
    .get()
    .then(querySnapshot => {
      const userId = querySnapshot.docs[0].id;
      return userId;
    });
};

export const addUser = async ({email, password}: User) => {
  const user = await firestore().collection('users').add({
    email,
    password,
  });
  console.log('User added!', user);
  return user;
};
