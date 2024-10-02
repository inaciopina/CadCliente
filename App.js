import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import UsuarioScreen from './screens/UsuarioScreen';
import ClienteScreen from './screens/ClienteScreen';
import ProdutosScreen from './screens/ProdutosScreen';
import FornecedorScreen from './screens/FornecedorScreen';
import FinanceiroScreen from './screens/FinanceiroScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Usuario"
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#1e1e2f',
            width: 240,
          },
          drawerLabelStyle: {
            color: '#ffffff',
            fontSize: 16,
            fontWeight: 'bold',
          },
          drawerActiveBackgroundColor: '#3949ab',
          drawerActiveTintColor: '#ffffff',
          drawerInactiveTintColor: '#ffffff',
          drawerItemStyle: {
            borderRadius: 8,
          },
        }}
      >
        <Drawer.Screen name="Usuário" component={UsuarioScreen} />
        <Drawer.Screen name="Cliente" component={ClienteScreen} />
        <Drawer.Screen name="Produtos" component={ProdutosScreen} />
        <Drawer.Screen name="Fornecedor" component={FornecedorScreen} />
        <Drawer.Screen name="Financeiro" component={FinanceiroScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
