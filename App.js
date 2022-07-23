import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import SignIn from './screens/Authentication/SignIn';
import SignUp from './screens/Authentication/SignUp';
import ForgetPassword from './screens/Authentication/ForgetPassword';

export default function App() {
  return (
    <>
      <ForgetPassword />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
