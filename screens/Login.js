
import { NativeBaseProvider, Text,Input,VStack,Button,Link,Image} from "native-base";
import React, { useState,useEffect } from 'react'
import { Alert } from 'react-native';

function Login({navigation}) {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  loginUser = () => {
    if (userName != "" && password != "") {
      fetch(`${userName}/${password}`, {
        method: "GET",
        headers: {
          'content-type': 'application/json'
        }
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          if (json.length === 0) {
            Alert.alert("Username or Password incorrect.Try again!")
          } else {
            clearTextFields()
            Alert.alert("Login Successfully.");
            navigation.navigate("Home")
          }
        })
        .catch((err) => console.log(err));
    } else {
      Alert.alert("Please Enter Username and Password and try again.")
    }
  }

  clearTextFields = () => {
    setUserName("");
    setPassword("");
  }

  return (
    <NativeBaseProvider>
      <VStack space={3} alignItems="center">
      <Text color={'#182C61'} alignItems='center' mt="20" fontSize="30" fontWeight={'bold'}>Welcome !</Text>
      <Input value={userName} onChangeText={(e)=>{setUserName(e)}} variant="outline" placeholder="Email" borderColor={'#182C61'} mt='10' width='80%'borderRadius='20'/>
      <Input value={password} onChangeText={(e)=>{setPassword(e)}} variant="outline" placeholder="Password" borderColor={'#182C61'} mt='3' width='80%' borderRadius='20'/>
      <Button size="md" backgroundColor={'#182C61'} width='40%' mt='8' borderRadius='20'onPress={() => { loginUser()}}>Login</Button>
      <Text color={'#182C61'} alignItems='center' mt="39" fontSize="15">Don't have an account ?</Text>
      <Link href="" color={'#182C61'} onPress={()=>{navigation.navigate("Register")}} >Register Now !</Link>
      <Image size={10} borderRadius={80} source={require('../assets/car.png')} alt="Alternate Text" mt='71' />
    
      </VStack>
    </NativeBaseProvider>
  )
}

export default Login