import React,{Component} from 'react'
import {createStacknavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'

export default function App(){
  return <appContainer/>
}

const {appNavigator} = createStacknavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions:{
      headerShown:False
    }
  },
  Details:{
    screen:DetailsScreen
  }
},
{
  initialRouteName:'Home'
}
)

const {appContainer} = createAppContainer(appNavigator)