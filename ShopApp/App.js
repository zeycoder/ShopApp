import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Products from './src/pages/Products/Products';
import Detail from './src/pages/Detail/Detail';
import Login from './src/pages/Login/Login';
import AuthProvider from './src/context/AuthProvider/AuthProvider';
import { useSelector } from 'react-redux';
import Loading from './src/components/Loading/Loading';
import { useDispatch } from 'react-redux';

const Stack = createStackNavigator();


export default function App() {
  const userSession = useSelector(s=>s.user);
  const isAuthLoading = useSelector(s=>s.isAuthLoading);
  const dispatch = useDispatch();
  return (
      <NavigationContainer>
        {isAuthLoading?<Loading/>:
          !userSession
          ?(
          <Stack.Navigator>
            <Stack.Screen
                name='LoginScreen'
                component={Login}
                options={{headerShown: false}}
                
            />
          </Stack.Navigator>
          )
          :(
          <Stack.Navigator>
            <Stack.Screen
              name='ProductsScreen'
              component={Products}
              options={{
                title: "Mağaza'm",
                headerStyle: { backgroundColor: '#915096' },
                headerTitleStyle: { color: 'white' },
                headerRight:()=><TouchableWithoutFeedback onPress={ () => dispatch({type:'REMOVE_USER'})}><Text style={{color:'white',paddingHorizontal:20}}>Log Out</Text></TouchableWithoutFeedback>
              }} />
            <Stack.Screen 
              name='DetailScreen' 
              component={Detail} 
              options={{
                title: "Mağaza'm",
                headerStyle: { backgroundColor: '#915096' },
                headerTitleStyle: { color: 'white' },
              }} />
          </Stack.Navigator>
          )
        }
      </NavigationContainer>
  );
}
