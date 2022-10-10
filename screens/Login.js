
import { NativeBaseProvider, Text,Input,VStack,Button,Link,Image} from "native-base";
import React, { useState,useEffect } from 'react'
import { Alert } from 'react-native';

function Login({navigation}) {

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
      <VStack space={3} alignItems="center">
      <Text color={'#182C61'} alignItems='center' mt="20" fontSize="30" fontWeight={'bold'}>Welcome !</Text>
      <Input variant="outline" placeholder="User Name" borderColor={'#182C61'} mt='10' width='80%'borderRadius='20'/>
      <Input variant="outline" placeholder="Password" borderColor={'#182C61'} mt='3' width='80%' borderRadius='20'/>
      <Button size="md" backgroundColor={'#182C61'} width='40%' mt='8' borderRadius='20'onPress={()=>{navigation.navigate("Register")}}>Login</Button>
      <Text color={'#182C61'} alignItems='center' mt="39" fontSize="15">Don't have an account ?</Text>
      <Link href="" color={'#182C61'}>Register Now !</Link>
      <Image size={10} borderRadius={80} source={require('../assets/car.png')} alt="Alternate Text" mt='71' />
    
      </VStack>
    </NativeBaseProvider>
  )
}

export default Login