import React, { StyleSheet, View, Component } from 'react';
import ChartView from 'react-native-highcharts';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import { NavigationActions } from 'react-navigation';


export default class FooterTabsBadgeExample extends Component {
  render() {

    return (
      <Container>
        <Header />
        <Text>SALDO</Text>
     
        <Content />
        
        <Footer>
          <FooterTab>
            <Button onPress={() => this.props.navigation.navigate("Home")}>
                <Icon name="home"/>
                <Text>Beranda</Text>
            </Button>
            <Button badge vertical onPress={() => this.props.navigation.navigate("Transaksi")}>
              <Badge><Text>2</Text></Badge>
              <Icon name="ios-list-box" />
              <Text>Transaksi</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate("Order")}>
              <Icon name="logo-buffer" />
              <Text>Order Baru</Text>
            </Button>
            <Button active badge vertical onPress={() => this.props.navigation.navigate("Saldo")}>
              <Badge ><Text>51</Text></Badge>
              <Icon active name="md-card" />
              <Text>Saldo</Text>
            </Button>
 
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}