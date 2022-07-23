import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

// Navigators
import AuthStackNavigator from './AuthStackNavigator'

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  )
}

export default AppNavigator