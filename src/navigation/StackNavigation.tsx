import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { DetailScreen } from '../screens/detail/DetailScreen';
import { BreedsScreen } from '../screens/breeds/BreedsScreen';


export type RootStackParams = {
    BreedsScreen: undefined,
    DetailScreen: {breed:string},
  }

export const StackNavigation = () => {

    const Stack = createStackNavigator<RootStackParams>();

    return (
        <Stack.Navigator
        screenOptions={{
            headerShown:false,
            cardStyle: {
                backgroundColor: 'white'
            }
        }}
        >
            <Stack.Screen name="BreedsScreen" component={BreedsScreen} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>
    )
}
