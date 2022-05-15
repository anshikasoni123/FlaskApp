import React,{Component} from 'react'
import{View,Text,Stylesheet,SafeAreaView,Alert} from 'react-native'
import axios from 'axios'
import {Card,Icon} from 'react-native-elements'

export default class DetailsScreen extends React.Component{
    construtor(props){
        super(props)
        this.state={
            details:{},
            url:`http://localhost:5000/star?name=${this.props.navigation.getParam(planet_name)}`,
            imagePath:''
        }
    }

    componentDidMount(){
        this.getDetails()
    }

    getDetails=()=>{
        const {url} = this.state;
        axios
        .get(url)
        .responce(responce => {
            this.setDetails(responce.data.data)
        })
        .catch(error => {
            Alert.alert(error.message)
        })
    }

    setDetails = PlanetDetails =>{
        imagePath = '../assets/star1.jpg'
        
        this.setState({
            details:PlanetDetails,
            imagePath:imagePath
        })
    }

    render(){
        const {details,imagePath} = thia.state

        if(details.specifications){
            return(
                  <View>
                      <SafeAreaView>
                          <Card
                          title={details.name}
                          image={imagePath}
                          imageProps = {{resizeMode:'contain',width:'100%'}}>

                          <View>
                              <Text style = {{fontFamily:'cursive',fontSize:20,fontWeight:'bold'}}>
                                  `Star Distance : ${details.distance}`
                              </Text>
                          </View>
                          <View>
                              <Text style = {{fontFamily:'cursive',fontSize:20,fontWeight:'bold'}}>
                                  `Star Distance : ${details.mass}`
                              </Text>
                          </View>
                          <View>
                              <Text style = {{fontFamily:'cursive',fontSize:20,fontWeight:'bold'}}>
                                  `Star Distance : ${details.radius}`
                              </Text>
                          </View>
                          <View>
                              <Text style = {{fontFamily:'cursive',fontSize:20,fontWeight:'bold'}}>
                                  `Star Distance : ${details.gravity}`
                              </Text>
                          </View>

                          <View>
                              <Text style = {{fontFamily:'cursive',fontSize:20,fontWeight:'bold'}}>{details.specifications ? 'Specifications: ' : ''}</Text>
                              {details.specifications.map((iten,index)=>(
                                  <Text style = {{fontFamily:'cursive',fontSize:20,fontWeight:'bold'}} key={index.toString()}>{item}</Text>
                              ))}
                          </View>
                          </Card>
                      </SafeAreaView>
                  </View>
                )
        }
    }
}