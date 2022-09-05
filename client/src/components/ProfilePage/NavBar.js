import * as React from 'react';
// import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Animal } from '../../screens/Animal'
import { FoodSafety } from '../../screens/FoodSafety'
import { Vets } from '../../screens/Vets'
import { Events } from '../../screens/Events'

const Tab = createBottomTabNavigator();

export const NavBar = (navigation) => {
  return (
      <Tab.Navigator  screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Animal') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'FoodSafety') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Animal" icon="home" component={Animal} />
        <Tab.Screen name="FoodSafety" component={FoodSafety} />
        <Tab.Screen name="Vets" component={Vets} />
        <Tab.Screen name="Events" component={Events} />
      </Tab.Navigator>
  );
}