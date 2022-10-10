import { NativeBaseProvider, Text,Input,VStack,Button} from "native-base";
import React from 'react'

function Register({navigation}) {
  return (
    <NativeBaseProvider>
    <VStack space={3} alignItems="center">
    <Text color={'#182C61'} alignItems='center' mt="20" fontSize="30" fontWeight={'bold'}>Register</Text>
    <Input variant="outline" placeholder="Email" borderColor={'#182C61'} mt='10' width='80%' borderRadius='20'/>
    <Input variant="outline" placeholder="Contact Number" borderColor={'#182C61'} mt='3' width='80%' borderRadius='20'/>
    <Input variant="outline" placeholder="User Name" borderColor={'#182C61'} mt='3' width='80%' borderRadius='20'/>
    <Input variant="outline" placeholder="Password" borderColor={'#182C61'} mt='3' width='80%' borderRadius='20'/>
    <Button size="md" backgroundColor={'#182C61'} width='40%' mt='7' borderRadius='22' onPress={()=>{navigation.navigate("Home")}}>Create Account</Button>
    </VStack>
  </NativeBaseProvider>
  )
}

export default Register