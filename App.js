import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class WeatherScreen extends Component {
  constructor(){
    super ();
    this.state = {
      weather : ''
    }
  }
  getWeather = async()=>{
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139';
    return fetch (url)
    .then(response => response.json())
    .then(responseJson =>{
      this.setState({
        weather:responseJson
      })
    })
    .catch(error =>{
      console.log(error)
    })
  }
  componentDidMount = ()=>{
    this.getWeather()
  }
  render(){
    if(this.state.weather === ''){
      return(
        <View style ={styles.container}>
          <Text>Loading..........</Text>
        </View>
      )
    }
    else{
      return(
      <View style = {styles.container}>
        <View style = {styles.subcontainer}>
          <Text style = {styles.title}>weather forcast</Text>
          <View style = {styles.textContainer}>
          <Text style = {{fontSize : 18}}>{this.state.weather.main.temp}&deg;C</Text>
          <Text style = {{fontSize : 20, margin:10}}>humidity:{this.state.weather.main.humidity}</Text>
          <Text style = {{fontSize : 20}}>{this.state.weather.weather[0].descrition}</Text>
          </View>
        </View>
      </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subcontainer:{
    flex:1,
    borderWidth:1,
    alignItems:'center'
  },
  title:{
    marginTop:50,
    fontSize:3,
    fontWeight:'550'
  },
  textContainer:{
    flex:1,
    alignItems:'center',
    flexDirection:'row',
    marginTop:-150
  }
});
