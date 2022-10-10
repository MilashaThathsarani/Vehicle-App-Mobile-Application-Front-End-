import { NativeBaseProvider, Text,Input,VStack,Button} from "native-base";
import React, { useState } from 'react'
import { Alert } from 'react-native';

function Register(navigation) {
  
  const[email,setEmail]=useState('');
    const[phoneNumber,setPhoneNumber]=useState('');
    const[userName,setUserName]=useState('');
    const[password,setPassword]=useState('');

    const saveData=()=>{
      fetch('http://192.168.8.100:8000/users',{
        method:'POST',
        body:JSON.stringify({
          email:email,
          phoneNumber:phoneNumber,
          userName:userName,
          password:password
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
       }
      })
  
      .then((response) => {
        
        Alert.alert(" Registerd Successfully !")
        clearTextFields();
      })
      .catch((err)=>{Alert.alert("Error occured !")})
    }

  const clearTextFields = () => {
    setEmail("");
    setPhoneNumber("");
    setUserName("");
    setPassword("");
}

  return (
    <NativeBaseProvider>
    <VStack space={3} alignItems="center">
    <Text color={'#182C61'} alignItems='center' mt="20" fontSize="30" fontWeight={'bold'}>Register</Text>
    <Input value={email} onChangeText={(e)=>{setEmail(e)}} variant="outline" placeholder="Email" borderColor={'#182C61'} mt='10' width='80%' borderRadius='20'/>
    <Input value={phoneNumber} onChangeText={(e)=>{setPhoneNumber(e)}} variant="outline" placeholder="Contact Number" borderColor={'#182C61'} mt='3' width='80%' borderRadius='20'/>
    <Input value={userName} onChangeText={(e)=>{setUserName(e)}}variant="outline" placeholder="User Name" borderColor={'#182C61'} mt='3' width='80%' borderRadius='20'/>
    <Input value={password} onChangeText={(e)=>{setPassword(e)}} variant="outline" placeholder="Password" borderColor={'#182C61'} mt='3' width='80%' borderRadius='20'/>
    <Button size="md" backgroundColor={'#182C61'} width='40%' mt='7' borderRadius='22' onPress={() => { saveData()}} >Create Account</Button>
    </VStack>
  </NativeBaseProvider>
  )
}

export default Register