import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, TextInput, Button, Appbar } from 'react-native-paper';
import styles from './styles'; 

export default function UsuarioScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (nome && senha) {
      navigation.navigate('Cliente');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Login de Usuário" titleStyle={styles.title} />
      </Appbar.Header>
      <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
        <Text style={{ marginBottom: 20, fontSize: 20 }}>Bem-vindo!</Text>

        <TextInput
          label="Nome"
          value={nome}
          onChangeText={text => setNome(text)}
          style={[styles.input, { width: '70%', marginBottom: 15 }]} 
          mode="outlined"
        />

        <TextInput
          label="Senha"
          value={senha}
          onChangeText={text => setSenha(text)}
          secureTextEntry
          style={[styles.input, { width: '70%', marginBottom: 20 }]} 
          mode="outlined"
        />

        <Button
          mode="contained"
          onPress={handleLogin}
          style={[styles.button, { width: '70%' }]} 
        >
          Entrar
        </Button>
      </ScrollView>
    </View>
  );
}
