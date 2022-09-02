import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome } from './src/screens/Welcome'
import { SignUp } from './src/screens/SignUp'
import { LogIn } from './src/screens/LogIn'
import { Profile } from './src/screens/Profile'
import { Animal } from './src/screens/Animal'
import { FoodSafety } from './src/screens/FoodSafety'
import { Vets } from './src/screens/Vets'
import { Events } from './src/screens/Events'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Animal" component={Animal} />
        <Stack.Screen name="FoodSafety" component={FoodSafety} />
        <Stack.Screen name="Vets" component={Vets} />
        <Stack.Screen name="Events" component={Events} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}