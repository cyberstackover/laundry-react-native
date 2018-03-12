import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './src/Component/Login/login';
import HomeScreen from './src/Component/Beranda/home';
import RegistrasiScreen from './src/Component/Registrasi/signup';
import OrderScreen  from './src/Component/Order/order';
import TransaksiScreen from './src/Component/Transaksi/transaksi';
import SaldoScreen from './src/Component/Saldo/saldo';

import { StackNavigator, DrawerNavigator } from 'react-navigation';

const Dr_Beranda = DrawerNavigator({

    Login:{
      screen: LoginScreen,
  }
},
{
    drawerWidth: 240,
});

const App = StackNavigator({
  Login: {
      screen: LoginScreen,
  },


 Home: {
      screen: HomeScreen,
  },

   Daftar:{
      screen: RegistrasiScreen,
  },

  Order:{
      screen: OrderScreen,
  },

  Transaksi:{
      screen: TransaksiScreen,
  },

  Saldo:{
      screen: SaldoScreen,
  },

},
  {
  headerMode: 'none',
  navigationOptions:{ 
    header:{ 
      visible: false,
      left: null,
    },
    gesturesEnabled: false,
  },
});

export default App;