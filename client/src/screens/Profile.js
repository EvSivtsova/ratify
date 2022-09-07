import { Text, SafeAreaView, Button } from 'react-native';
import { styles } from '../styles';
import { UserInfoList, } from '../components/ProfilePage/UserInfoList';

export function Profile({ navigation }) {
  return (
    <SafeAreaView>
      <Text style={styles.baseText}>My Profile</Text>
      <UserInfoList/>
      <Button  title="Go to Home" onPress={() => navigation.navigate('Welcome')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}