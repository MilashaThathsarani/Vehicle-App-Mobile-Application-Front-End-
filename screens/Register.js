import { NativeBaseProvider, Text,Input,VStack,Button} from "native-base";
import React from 'react'

function Register({navigation}) {
  
  const[email,setEmail]=useState('');
    const[contactNumber,setContactNumber]=useState('');
    const[userName,setUserName]=useState('');
    const[password,setPassword]=useState('');


    if (email != "" && contactNumber != "" && userName != "" && password != "") {
      fetch('', {
        method: 'POST',
        body: JSON.stringify({
          email:email,
          contactNumber:contactNumber,
          userName:userName,
          password:password
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.status === "500") {
            Alert.alert(json.message)
          } else {
            Alert.alert(json.message)
            clearTextFields();
          }
        })
        .catch((err) => Alert.alert(err.message));
    } else {
      Alert.alert("Please fill all the fields and try again.")
    }

  const clearTextFields = () => {
    setEmail("");
    setContactNumber("");
    setUserName("");
    setPassword("");
}

  return (
    <NativeBaseProvider>
    <VStack space={3} alignItems="center">
    <Text color={'#182C61'} alignItems='center' mt="20" fontSize="30" fontWeight={'bold'}>Register</Text>
    <Input value={email} onChangeText={(e)=>{setEmail(e)}} variant="outline" placeholder="Email" borderColor={'#182C61'} mt='10' width='80%' borderRadius='20'/>
    <Input value={contactNumber} onChangeText={(e)=>{setContactNumber(e)}} variant="outline" placeholder="Contact Number" borderColor={'#182C61'} mt='3' width='80%' borderRadius='20'/>
    <Input value={userName} onChangeText={(e)=>{setUserName(e)}}variant="outline" placeholder="User Name" borderColor={'#182C61'} mt='3' width='80%' borderRadius='20'/>
    <Input value={password} onChangeText={(e)=>{setPassword(e)}} variant="outline" placeholder="Password" borderColor={'#182C61'} mt='3' width='80%' borderRadius='20'/>
    <Button size="md" backgroundColor={'#182C61'} width='40%' mt='7' borderRadius='22' onPress={()=>{navigation.navigate("Home")}}>Create Account</Button>
    </VStack>
  </NativeBaseProvider>
  )
}

export default Register