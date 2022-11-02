import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home'
import { Statistics } from '../screens/Statistics'

const Stack = createNativeStackNavigator()

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="statistics" component={Statistics} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}