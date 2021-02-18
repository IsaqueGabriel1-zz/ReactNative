
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack' ;

import Home from './src/pages/Home'
import Sobre from './src/pages/sobre'
import Login from './src/pages/Login'
import Nav from './src/pages/Nav'
import Produtos from './src/pages/Produtos'

const Stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer >
      <Stack.Navigator headerMode="none" initialRouteName="Login">
        <Stack.Screen name="Home" component={Home} option={{title: 'Home'}}/>
        <Stack.Screen name="Sobre" component={Sobre} option={{title: 'Sobre'}}/>
        <Stack.Screen name="Login" component={Login} option={{title: 'Login'}}/>
        <Stack.Screen name="Produtos" component={Produtos} option={{title: 'Produtos'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;

