/**
 * @format
 */

import 'react-native';
import Login from '../src/screens/Login';
import Home from '../src/screens/Home';
import {
  render,
  cleanup,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';

describe('<Login />', () => {
  test('should match snapshot', async () => {
    const comp = <Login />;
    const {getByTestId, getByText, queryByTestId, toJSON} = render(comp);
    console.log(getByTestId('email'))
    // const {getByTestId, getByText, queryByTestId, toJSON} = render(
    //   '<Login login={{user: {userId: "123", email: "test@test.com", isLoggedIn: true}}} />',
    // );

    // const email = 'test@test.com';
    // const emailInput = getByTestId('email');
    // fireEvent.changeText(emailInput, email);
    //
    // const password = 'T3s7P@sSW01d';
    // const passInput = getByTestId('password');
    // fireEvent.changeText(passInput, password);
    //
    // const button = getByTestId('loginBtn');
    // fireEvent.press(button);
    //
    // await waitFor(() => expect(queryByTestId('loginMessage')).toBeTruthy());
    // expect(getByTestId('loginMessage').props.children).toBe('Succesvol!');

    // expect(toJSON()).toMatchSnapshot();
  });
});
