import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform } from 'react-native';
import { FavoritesScreen } from '../screens/FavoritesScreen';
import { StackNavigation } from './StackNavigation';
import { colors } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';


export const TabNavigation = () => {

  return Platform.OS === 'ios'
          ? <TabsIOS />
          : <TabsAndroid />
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={ true }
      barStyle={{
        backgroundColor: colors.primary,
      }}
      inactiveColor={'#B8B8B8'}
      activeColor={colors.secondary}
      screenOptions={ ({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName: string = '';
            switch( route.name ) {
              case 'StackNavigation':
                iconName = 'paw-outline'
              break;
              case 'FavoritesScreen':
                iconName = 'star-outline'
              break;
            }
          return <Icon name={ iconName } size={ 20 } color={ color } />
        }
      })}
    >
      <BottomTabAndroid.Screen name="StackNavigation" options={{ title: 'Razas' }} component={ StackNavigation } />
      <BottomTabAndroid.Screen name="FavoritesScreen" options={{ title: 'Favoritos' }} component={ FavoritesScreen } />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator   
        screenOptions={ ({ route }) => ({
          tabBarInactiveTintColor: colors.primary,
          tabBarActiveTintColor: colors.secondary,
          headerShown: false,
          tabBarIcon: ({ color}) => {
            let iconName: string = '';
            switch( route.name ) {
              case 'StackNavigation':
                iconName = 'paw-outline'
              break;
              case 'FavoritesScreen':
                iconName = 'star-outline'
              break;
            }
          return <Icon name={ iconName } size={ 20 } color={ color } />
          }
        })}
      >
      <BottomTabIOS.Screen name="StackNavigation" options={{ title: 'Razas' }} component={ StackNavigation } />
      <BottomTabIOS.Screen name="FavoritesScreen" options={{ title: 'Favoritos' }} component={ FavoritesScreen } />
    </BottomTabIOS.Navigator>
  );
}