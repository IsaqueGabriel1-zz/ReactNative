import React from 'react';
import { View, Text,Image, StatusBar,ScrollView ,FlatList,  SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import Rodape from '../Home/rodape';

const DATA = [
    {
        id: '1',
        img: 'fogao.png',
        produto: 'Geladeira',
        preco: 'R$ 2000.00'

    },
    {
        id: '2',
        produto: 'Fogão',
        preco: 'R$ 999.99'

    },
    {
        id: '3',
        produto: 'Microondas',
        preco: 'R$ 700.00'

    },
    {
        id: '4',
        produto: 'Maquina de lavar roupa',
        preco: 'R$ 600.00'

    },
    {
        id: '5',
        produto: 'Lavadora de louça',
        preco: 'R$ 600.00'

    },
]

function Produtos(props){
    const {navigation} = props
    return(
        <View>
            <View>
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
            <ScrollView>
                <FlatList 
                    data={DATA}
                    renderItem = {({item}) =>
                    <View style={styles.corpo}>
                        <Image style={styles.img} source={require('../../../assets/geladeira.jpg')}/>
                        <Text>{item.produto}</Text>
                        <Text>{item.preco}</Text>
                    </View>
                    }
                />
                <Rodape/>
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    corpo:{
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderWidth: 1,
    },
    Nav:{
        marginLeft: 15,
        backgroundColor: '#040b1f',
        justifyContent: 'center'
    },
    img:{
        width: 100,
        height: 100
    }
}) 
export default Produtos