'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  AsyncStorage,
  ScrollView
} from 'react-native';

import { Container,
		     Content, 
         Header,
         Text,
         Button,
         Icon,
         Title,
         Left,
         Thumbnail,
         Body,
         Card,
         CardItem,
         Right,
         FooterTab,
         Badge,
         Footer,
         Item,
         Input,
         
       } from 'native-base';

import Loader from '../Indicator/loader';

class pasien extends Component {
   constructor() {
    super();
    this.state = {
      data : [],
      loading : true,
      avatarSource: null,

      
    }
    
  }

  
    componentDidMount() {
        this.getAllData();
    }


    getAllData(){
        AsyncStorage.getItem('tokenUser', (error, result1) => {
            if (result1) {
                      AsyncStorage.getItem('idUser', (error, result) => {
                        if (result) {
                              fetch('http://dev.infinite-creative.com/sispak_api/Pasien/dokter/' + result, {
                               method: 'GET',
                               headers: {
                                            'Content-Type': 'application/json',
                                            'Accept': 'application/json',
                                            'token': result1
                                          }
                                })
                                .then((response) => response.json())
                                .then((response) => {

                                  this.setState({
                                      data : response.data,
                                    });

                                   this.setState({
                                      loading : false,
                                    });
                      
                                }).done();
                        }
                    });
            }
        });
  
    }

    _renderPasien () {
       const { navigate } = this.props.navigation;
          console.log(this.state.data);
            let dataPasien = this.state.data.map((data, index) => {
              let source;
              var url_photo = "http://dev.infinite-creative.com/sispak_api/upload/";

              source = {uri: url_photo+data.foto, isStatic: true};
                    return (
                            <Card key={index} style={styles.st_card1}>
                                <CardItem>
                                    <Left>
                                      <Thumbnail source={source} />
                                      <Body>
                                        <Text style={styles.right}>{data.nama}</Text>
                                        <Text note style={styles.right}>{data.tanggal_lahir}</Text>
                                      </Body>
                                    </Left>
                                     <Right >
                                      <Icon name="arrow-forward" onPress={() => navigate('Input', {id : data.id_pasien})}/>
                                    </Right>
                                </CardItem>
                              </Card>
                      )  
                });

          return (
             
          <View style={{flex: 1}}>
          <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
            <ScrollView>
          {dataPasien}</ScrollView>

          <Footer>
          <FooterTab>
            <Button onPress={() => this.props.navigation.navigate("Home")}>
                <Icon name="home"/>
                <Text>Beranda</Text>
            </Button>
            <Button active badge vertical onPress={() => this.props.navigation.navigate("Transaksi")}>
              <Badge><Text>2</Text></Badge>
              <Icon name="ios-list-box" />
              <Text>Transaksi</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate("Order")}>
              <Icon name="logo-buffer" />
              <Text>Order Baru</Text>
            </Button>
            <Button  badge vertical onPress={() => this.props.navigation.navigate("Saldo")}>
              <Badge ><Text>51</Text></Badge>
              <Icon active name="md-card" />
              <Text>Saldo</Text>
            </Button>
 
          </FooterTab>
        </Footer>
                    </View>
            );
    }


  render() {
     const { navigate } = this.props.navigation;
  
     if (this.state.data.length > 0) {
                return (
                  <Container style={styles.container}>
                   
                    <Loader loading={this.state.loading} />
                      {this._renderPasien()}
                  </Container>
                );
          }else{
            return (
                  <Container style={styles.container}>
                     
                      <Content>
                        <Loader loading={this.state.loading} />
                       
                      </Content>
                  </Container>
            );
          }
        
  
  }
}

const styles = StyleSheet.create({
	container:{
      flex: 1,
//      backgroundColor: '#16a085',
    },
   
});

export default pasien;