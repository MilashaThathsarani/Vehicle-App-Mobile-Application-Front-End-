
import React from 'react'
import { NativeBaseProvider, Text,Input,VStack,Button,Link,Image} from "native-base";

function Login() {
  return (
    <NativeBaseProvider>
      <VStack space={3} alignItems="center">
      <Text color={'#182C61'} alignItems='center' mt="20" fontSize="30" fontWeight={'bold'}>Welcome !</Text>
      <Input variant="outline" placeholder="User Name" borderColor={'#182C61'} mt='16' width='80%'/>
      <Input variant="outline" placeholder="Password" borderColor={'#182C61'} mt='4' width='80%'/>
      <Button size="md" backgroundColor={'#182C61'} width='40%' mt='7' borderRadius='20'>Login</Button>
      <Text color={'#182C61'} alignItems='center' mt="39" fontSize="15">Don't have an account ?</Text>
      <Link href="" color={'#182C61'}>Register Now !</Link>
      <Image size={10} borderRadius={80} source={require('../assets/car.png')} alt="Alternate Text" mt='71' />
    
      </VStack>
    </NativeBaseProvider>
  )
}

export default Login