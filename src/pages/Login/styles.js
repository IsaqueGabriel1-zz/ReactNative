import React from 'react';
import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    corpo:{
        marginTop:'16%',
        alignItems: 'center',
        width: '100%',
        height: 150
    },
    input:{
        width: 220,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 30
    },
    text:{
        marginTop: 50,
        marginBottom: 20,
        fontSize: 40
    },
    btn:{
        borderWidth: 1,
        width: 220,
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#040b1f'

    },
    textBtn:{
        fontSize: 20,
        color: 'white'
    },
    Nav:{
        marginLeft: 15,
        backgroundColor: '#040b1f',
        justifyContent: 'center'
    },
    Rodape:{
        width: '100%',
        marginTop: 48
    }
})

export default styles