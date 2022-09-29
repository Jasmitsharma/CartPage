import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from 'react-native/Libraries/NewAppScreen';



export default function App() {


  const [counter, setCounter] =useState(1);


 
    return (
      <View style={styles.container}>
      <Text style={styles.headertop}>MY CART</Text>
      
      <View style={styles.card}>
      <Image style={{height:100, width:80}}
        source ={require('./assets/phone.jpg')}/>
        <View style={{height:100, marginLeft:10, paddingVertical:20, flex:1}} >
        <Text style={{fontWeight: 'bold', fontSize:16}}
          > iPhone 14 Pro </Text>
          <Text style={{fontSize:17, fontWeight:'bold'}}>$999</Text>
        </View>
        
        <View style={{marginTop:30, alignItems: 'center'}}>
          <View style={styles.action}>
            <TouchableOpacity onPress={() =>{
              if (counter > 1) setCounter(counter -1);
            } }>
            <Icon name="remove" size={25} color={Colors.white}/>
            </TouchableOpacity>
            <Text style={styles.number}>{counter}</Text>
            <TouchableOpacity onPress={() => {
              setCounter (counter + 1) ;
              console.log(counter);
            }} >
            <Icon name="add" size={25} color={Colors.white}/>
            </TouchableOpacity>
           
          </View>
          </View>
          </View>

          <Text style={styles.summary}>ORDER SUMMARY</Text>
          <View style={styles.price}>
            <Text style={styles.text}> Total </Text>
          <Text style={styles.text}>${999*counter}</Text>
          </View>

          
        <Button
        color="red" 
         
        title='Checkout' 
        onPress={() => Alert.alert("Thank You For Your Order ")} ></Button>



      </View>

      
    );
  }


      const styles = StyleSheet.create({
        container: {
        marginHorizontal: 30,
        marginTop: 80,
      },
      
      headertop: {
        color: "red",
        fontSize: 20,
        fontWeight: "600",
        marginHorizontal: 123,
      },
      
      card: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 50,
        borderRadius: 1,
        height:110,
        elevation: 1,
        marginHorizontal: 10,
        paddingHorizontal: 20,
        paddingTop: 5,
        },
      
      
        action:{
          width: 70,
          height: 30,
          borderRadius:20,
          backgroundColor: "teal",
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          },
      
          number: {
            fontWeight: 'bold', 
            fontSize:18,
            color: 'white',
          },
      
          summary: {
              fontSize: 20,
              paddingTop: 60,
              marginHorizontal: 82,
              color: 'teal',
              fontWeight: '500',
      },
      
      price:{
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 50,
       display: 'flex',
       flexDirection: 'row',
       justifyContent: 'space-between',
      },
      
      text:{
      fontSize: 20,
      color: 'teal',
      fontWeight: 'bold'
      },
        
      
      });
