import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity,} from 'react-native';

import Rodape from './rodape';

function Compo(props){
    const {navigation} = props
    return(
        <View>
            <View>
                <StatusBar color="auto"/>
                <SafeAreaView style={{justifyContent:"center", flexDirection:'row',backgroundColor: '#040b1f', height: 85,}}>
                    <TouchableOpacity
                    style={styles.Nav} 
                    title='Ir para sobre' onPress={()=> navigation.navigate('Home')}
                    ><Text style={{color: 'white'}}>Home</Text></TouchableOpacity>
                    <TouchableOpacity
                    style={styles.Nav} 
                    title='Ir para sobre' onPress={()=> navigation.navigate('Produtos')}
                    ><Text style={{color: 'white'}}>Produtos</Text></TouchableOpacity>
                    <TouchableOpacity
                    style={styles.Nav} 
                    title='Ir para sobre' onPress={()=> navigation.navigate('Login')}
                    ><Text style={{color: 'white'}}>Login</Text></TouchableOpacity>
                </SafeAreaView>
            </View>
             <View style={styles.corpo}>
                 <Text style={styles.textCorpo}>Seja Bem Vindo(a) ao FullStackEletron!</Text>
                 <Text style={styles.textCorpo}>A melhor loja de eletrodomésticos do Brasil!</Text>
             </View>
            <Rodape/>
        </View>
    )
}


const styles = StyleSheet.create({
    corpo: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: '77%'
    },
    Nav:{
        marginLeft: 15,
        backgroundColor: '#040b1f',
        justifyContent: 'center'
    }
})
export default Compo