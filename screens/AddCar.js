import React, { useState,useEffect } from 'react'
import { NativeBaseProvider, Text, Input, VStack, Button} from "native-base";
import { Alert } from 'react-native';

export default function AddCar() {

  const[title,setTitle]=useState('');
    const[body,setBody]=useState('');
    const[id,setId]=useState('');


  const saveVehicle=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    id:1,
    title: title,
    body: body,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then((response) => {Alert.alert("Save Saved Successfully !")})
.catch((err)=>{Alert.alert("Error occured !")})
}
  return (
    <NativeBaseProvider>
      <VStack space={4} alignItems="center">
      <Input value={title} onChangeText={(e)=>{setTitle(e)}} mt='20' mx="3" placeholder="Title" w="300" height='10' borderColor={'#182C61'} />
      <Input value={body} onChangeText={(e)=>{setBody(e)}} mt="5%" mx="3" placeholder="Body" w="300" height='40'borderColor={'#182C61'}/>
      <Input value={id} onChangeText={(e)=>{setId(e)}} mt="5%" mx="3" placeholder="Id" w="300" borderColor={'#182C61'} />
      <Button left='110' borderRadius='105' mt="10%" size="md" color='red' onPress={saveVehicle}>
            Add</Button>
      </VStack>
    </NativeBaseProvider>
  )
}