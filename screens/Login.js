
import React from 'react'
import { NativeBaseProvider, Text,Input,VStack,Button,Link} from "native-base";

function Login() {
  return (
    <NativeBaseProvider>
      <VStack space={3} alignItems="center">
      <Text color={'#574b90'} alignItems='center' mt="20" fontSize="30" fontWeight={'bold'}>Welcome !</Text>
      <Input variant="outline" placeholder="User Name" borderColor={'#574b90'} mt='20' width='80%'/>
      <Input variant="outline" placeholder="Password" borderColor={'#574b90'} mt='5' width='80%'/>
      <Button size="md" backgroundColor={'#574b90'} width='40%' mt='10'>Login</Button>
      <Text color={'#574b90'} alignItems='center' mt="20" fontSize="15">Don't have an account ?</Text>
      <Link href="" color={'#574b90'}>Register Now !</Link>
      </VStack>
    </NativeBaseProvider>
  )
}

export default Login