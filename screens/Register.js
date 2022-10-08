import { NativeBaseProvider, Text,Input,VStack,Button} from "native-base";
import React from 'react'

function Register() {
  return (
    <NativeBaseProvider>
    <VStack space={3} alignItems="center">
    <Text color={'#574b90'} alignItems='center' mt="20" fontSize="30" fontWeight={'bold'}>Register</Text>
    <Input variant="outline" placeholder="User Name" borderColor={'#574b90'} mt='20' width='80%'/>
    <Input variant="outline" placeholder="Email" borderColor={'#574b90'} mt='5' width='80%'/>
    <Input variant="outline" placeholder="Password" borderColor={'#574b90'} mt='5' width='80%'/>
    <Button size="md" backgroundColor={'#574b90'} width='40%' mt='10'>Save</Button>
    </VStack>
  </NativeBaseProvider>
  )
}

export default Register