import { NativeBaseProvider, Text,Input,VStack,Button} from "native-base";
import React from 'react'

function Register() {
  return (
    <NativeBaseProvider>
    <VStack space={3} alignItems="center">
    <Text color={'#218c74'} alignItems='center' mt="20" fontSize="30" fontWeight={'bold'}>Register</Text>
    <Input variant="outline" placeholder="User Name" borderColor={'#218c74'} mt='20' width='80%'/>
    <Input variant="outline" placeholder="Email" borderColor={'#218c74'} mt='5' width='80%'/>
    <Input variant="outline" placeholder="Password" borderColor={'#218c74'} mt='5' width='80%'/>
    <Button size="md" backgroundColor={'#218c74'} width='40%' mt='10'>Save</Button>
    </VStack>
  </NativeBaseProvider>
  )
}

export default Register