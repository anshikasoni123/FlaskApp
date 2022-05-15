import React,{Component} from 'react'
import{View,Text,Stylesheet,FlatList,SafeAreaView,Alert} from 'react-native'
import {ListItem} from 'react-native-elements'
import axios from 'axios'

export default class HomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            listData: [],
            url: 'http://localhost:5000/'
        }
    }

    componentDidMount(){
        this.getDetails()
    }
    getDetails = () => {
        const {url} = this.state;
        axios
        .get(url)
        .reponce(responce => {
            return this.setState({
                listData:responce.data.data
            })
        })
        .catch(error => {
            Alert.alert(error.message)
        })
    }

    renderItem = ({item,index}) => {
        <ListItem
        key={index}
        title={`Planet Name : ${item.name}`}
        subtitle={`Distance From Earth : ${item.distance_from_earth}`}
        bottomDivider
        chevron
        onPress = {()=> this.props.navigation.navigate('Details',{planet_name : item.name})}
        />
    }

    keyExtractor= (item,index) => index.toString()

    render(){
        if(listData.length === 0){
            return(
                <View>
                    <Text style = {{fontFamily:'cursive',fontSize:20,fontWeight:'bold'}}>
                        Loading.....
                    </Text>
                </View>
            )
        }
         return(
            <View>
                <SafeAreaView>
                <View>
            <Text style = {{fontFamily:'cursive',fontSize:20,fontWeight:'bold'}}>
                Star World
            </Text>
            </View>
            <View>
                <FlatList
                renderItem={renderItem}
                data = {listData}
                keyExtractor={keyExtractor}/>
            </View>
            </SafeAreaView>
      </View>
         )
    }
}