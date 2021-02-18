import React from 'react';
import { View, Text, StatusBar,Button, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

function Home(props){
    const {navigation} = props
    return(
    <SafeAreaView style={{flex:1, justifyContent:"center", flexDirection:'row'}}>
        <TouchableOpacity
        style={style.Nav} 
        title='Ir para sobre' onPress={()=> navigation.navigate('Home')}
        ><Text style={{color: 'black'}}>Home</Text></TouchableOpacity>
        <TouchableOpacity
        style={style.Nav} 
        title='Ir para sobre' onPress={()=> navigation.navigate('Produtos')}
        ><Text style={{color: 'black'}}>Produtos</Text></TouchableOpacity>
        <TouchableOpacity
        style={style.Nav} 
        title='Ir para sobre' onPress={()=> navigation.navigate('Login')}
        ><Text style={{color: 'black'}}>Login</Text></TouchableOpacity>
    </SafeAreaView>
    )
}

const style = StyleSheet.create({
    Nav:{
        marginLeft: 15
    }
}) 

export default Home;