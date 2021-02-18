import React from 'react';
import { View, Text, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';

import Sobre from '../sobre'

function Produtos(props){
    const {navigation} = props
    return(
        <SafeAreaView style={{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#759'
        }}
        >
        <Text Style={{color: '#fff'}}>Produtos</Text>
        <TouchableOpacity style={{
            borderStartColor:'#00bb2b',
            width: 50,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
        }}
        title='Ir para sobre' onPress={()=> navigation.navigate('Sobre')}
        ><Text style={{color: 'white'}}>Home</Text></TouchableOpacity>
        </SafeAreaView>
    )
}
export default Produtos