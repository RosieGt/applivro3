import React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from '@react-navigation/native'



import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './Pages/Home'
import Listalivro from './Pages/Listalivro'
import Detalharlivro from './Pages/Detalharlivro'
import Inicial from './Pages/Inicial'
import Hall from './Pages/Hall'
import Fotos from './Pages/Fotos'
import Filmes from './Pages/Filmes'


const Stack = createNativeStackNavigator();

export default props => (

    <NavigationContainer>
        <StatusBar backgroundColor={"#0000ff"} barStyle='light-content' />
        
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='Listalivro' component={Listalivro} 
            options={()=> {
                return { title: "Livros"}
            }}/>
            <Stack.Screen name='Detalharlivro' component={Detalharlivro} 
             options={()=> {
                return { title: "Resumo livro"}
            }} />
            <Stack.Screen name='Inicial' component={Inicial} 
            options={()=> {
                return { title: "Login"}
            }} />
            
            <Stack.Screen name='Hall' component={Hall} 
            options={()=> {
                return { title: "Acesse"}
            }} />
            <Stack.Screen name='Fotos' component={Fotos} 
            options={()=> {
                return { title: "Fotos"}
            }} />
             <Stack.Screen name='Filmes' component={Filmes} 
            options={()=> {
                return { title: "Videos"}
            }} />
            
        </Stack.Navigator>
    </NavigationContainer>
)