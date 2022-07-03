import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TrackFocusScreen from './src/screens/TrackFocusScreen';
import TracksScreen from './src/screens/TracksSreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tracks"
          component={TracksScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TrackFocus"
          component={TrackFocusScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
