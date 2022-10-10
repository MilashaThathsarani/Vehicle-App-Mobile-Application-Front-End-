
import React, { useState,useEffect } from 'react'
import { NativeBaseProvider, Text, Input, VStack, Button} from "native-base";

export default function ModifyCar({route}) {
  const[registerNumber,setRegisterNumber]=useState('');
  const[brand,setBrand]=useState('');
  const[vehicleNumber,setVehicleNumber]=useState('');
  const[price,setPrice]=useState('');

    useEffect(() => {
        setRegisterNumber(route.params.obj.registerNumber)
        setBrand(route.params.obj.brand)
        setVehicleNumber(route.params.obj.vehicleNumber)
        setPrice(route.params.obj.price)
    })


const updatePost=()=>{
    fetch('http://192.168.8.100:8000/car', {
  method: 'PUT',
  body: JSON.stringify({
    registerNumber:registerNumber,
    brand:brand,
    vehicleNumber:vehicleNumber,
    price:price
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then((response) => {Alert.alert("Vehicle Updated Successfully !")})
.catch((err)=>{Alert.alert("Error occured !")})
}

const deletePost=()=>{
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
})
.then((response) => {Alert.alert("Vehicle Deleted Successfully !")})
.catch((err)=>{Alert.alert("Error occured !")})
}
    
  return (
    <NativeBaseProvider>
      <VStack space={4} alignItems="center">
      <Text mt='10' fontSize='30' color={'#182C61'} fontWeight={'bold'}>Modify Car</Text>
      <Input value={registerNumber} onChangeText={(e)=>{setRegisterNumber(e)}} mt='15' mx="3" placeholder="Register Number" w="300" height='10' borderColor={'#182C61'}/>
      <Input value={brand} onChangeText={(e)=>{setBrand(e)}} mt='3' mx="3" placeholder="Brand" w="300" height='10'borderColor={'#182C61'}/>
      <Input value={vehicleNumber} onChangeText={(e)=>{setVehicleNumber(e)}} mt='3' mx="3" placeholder="Vehicle Number" w="300" borderColor={'#182C61'} />
      <Input value={price} onChangeText={(e)=>{setPrice(e)}} mt='3' mx="3" placeholder="Price" w="300" borderColor={'#182C61'} />
      <Button left='110' borderRadius='105' mt="10%" size="md" color='red' onPress={() => { updatePost()}}>
            Update</Button>
      <Button left='110' borderRadius='105' mt="5%" size="lg" color='red' onPress={() => { deletePost()}}>
            Delete</Button>
        
      </VStack>
    </NativeBaseProvider>
  )
}