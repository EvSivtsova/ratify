import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Welcome } from './src/screens/Welcome'
import { SignUp } from './src/screens/SignUp'
import { LogIn } from './src/screens/LogIn'
import { Profile } from './src/screens/Profile'
import { Animal } from './src/screens/Animal'
import { FoodSafety } from './src/screens/FoodSafety'
import { Vets } from './src/screens/Vets'
import { Events } from './src/screens/Events'

const Tabs = createMaterialTopTabNavigator();

// function WelcomStack() {
//   return (
//     // <Tabs.Navigator>
//     //   <Tabs.Screen name="LogIn" component={LogIn} options={{title: "Sign In"}}/>
//     //   <Tabs.Screen name="SignUp" component={SignUp} options={{title: "Create Account"}}/>
//     // </Tabs.Navigator>
//   // );
// }

export default function App() {
  return (
    <SafeAreaProvider style={{padding: 20}}> 
      <NavigationContainer initialRouteName="Welcome" component={Welcome}>
        <Tabs.Navigator>
        <Tabs.Screen name="Welcome" component={Welcome} options={{title: "Home"}}/>
        <Tabs.Screen name="Animal" component={Animal} options={{title: "Animal Info"}}/>
        <Tabs.Screen name="Events" component={Events} />
        {/* <Tabs.Screen name="Vets" component={Vets} /> */}
        <Tabs.Screen name="Profile" component={Profile} />
        <Tabs.Screen name="LogIn" component={LogIn} options={{title: "Sign In"}}/>
        <Tabs.Screen name="SignUp" component={SignUp} options={{title: "Create Account"}}/>
        {/* <Tabs.Screen name="FoodSafety" component={FoodSafety} />
        <Tabs.Screen name="Vets" component={Vets} /> */}
        </Tabs.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}