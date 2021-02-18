import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function Rodape(){
    return(
        <View style={styles.rodape}>
            <Text style={styles.textoRodape}>Formas de pagamentos:</Text>
            <Image style={styles.Img} source={require('../../../assets/visa-master.png')}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    rodape:{
        width: '100%',
        height: 85,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#040b1f',
      },
      textoRodape: {
        flexDirection: 'row',
        color: 'red'
      },
    Img:{
        width: 250,
        height: 30
      }
})
export default Rodape