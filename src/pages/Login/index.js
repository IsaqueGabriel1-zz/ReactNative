import React from 'react';
import {StatusBar, View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import Rodape from '../Home/rodape';
import styles from './styles'

const testeUsuario = {
    nome: "Isaque",
    email: "usuario@teste.com",
    senha: "1234"
}

function Login({navigation}){

    const [nome, setNome] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");

    function autenticar(){
       if(testeUsuario.nome === nome && testeUsuario.email === email && testeUsuario.senha === senha){
            navigation.navigate("Home");
       }else{
           alert('erro, algo de errado n esta certo')
       }
    }

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
            <View style={styles.container}>
                <StatusBar style="auto"/>
                <View style={styles.corpo}>
                    <Text style={styles.text}>Login</Text>
                    
                    <TextInput
                    style={styles.input}
                    placeholder="Nome:"
                    value={nome}
                    onChangeText = {(text) => setNome(text)}
                    />
                    <TextInput
                    style={styles.input}
                    placeholder="Email:"
                    value={email}
                    onChangeText = {(text) => setEmail(text)}
                    />
                    <TextInput
                    style={styles.input}
                    placeholder="Senha:"
                    value={senha}
                    onChangeText = {(text) => setSenha(text)}
                    />
                    <TouchableOpacity style={styles.btn} onPress={autenticar}>
                        <Text style={styles.textBtn}>Enviar</Text>
                    </TouchableOpacity>
                    <View style={styles.Rodape}>
                        <Rodape/>
                    </View>
                </View>
            </View>
        </View>
    )
}


export default Login