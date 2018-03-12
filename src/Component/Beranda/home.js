import React, { StyleSheet, View, Component } from 'react';
import ChartView from 'react-native-highcharts';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import { NavigationActions } from 'react-navigation';


export default class FooterTabsBadgeExample extends Component {
  render() {
    var Highcharts='Highcharts';
    var conf={
            chart: {
                type: 'column',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
             
            },
            title: {
                text: 'Grafik Pendapatan'
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: [
                    '01-01-2018',
                    '02-01-2018',
                    '03-01-2018',
                    '04-01-2018',
                    '05-01-2018',
                    '06-01-2018',
                    '07-01-2018',
                    '08-01-2018',
                    '09-01-2018',
                    '10-01-2018',
                    '11-01-2018',
                    '12-01-2018'
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                
        name: 'New York',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

    }, 
        ]
        };

    const options = {
        global: {
            useUTC: false
        },
        lang: {
            decimalPoint: ',',
            thousandsSep: '.'
        }
    };
    return (
      <Container>
        <Header />
        <Text>Selamat Datang. Billy (Agen K21){'\n'}</Text>
        <Text> Pemberitahuan terbaru {'\n'}</Text>
        <Text> # Jadwal Pickup </Text>
        <Text> Jadwal pickup untuk daerah A akan dilakukan pada jam 15.00-16.00 mohon kepada agen untuk
            mempersiapkan cucian sebelum jam pickup </Text>
        <Text> # Perubahan Harga Terbaru </Text>
        <Text> Harga terbaru Januari 2018 bisa di lihat disini </Text>
        <Text> # Info promo terbaru </Text>
        <Text> Promo terbaru Januari 2018 bisa di lihat disini </Text>
        <Content />
        <ChartView style={{height:300}} config={conf} options={options}></ChartView>
        <Footer>
          <FooterTab>
          <Button active onPress={() => this.props.navigation.navigate("Home")}>
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
          <Button  badge vertical onPress={() => this.props.navigation.navigate("Saldo")}>
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