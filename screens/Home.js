import { NativeBaseProvider,Text,VStack,Image, Center} from "native-base";
import React from 'react'

function Home() {
  return (
    <NativeBaseProvider>
    <VStack space={3} alignItems="center">
    <Center>
    <Image size={150} borderRadius={80} source={require('../assets/car2.png')} alt="Alternate Text" mt='40' />
    </Center>
    <Text color={'#574b90'} alignItems='center' mt="6" fontSize="25" fontWeight={'bold'}>Auto Mobile</Text>
    </VStack>
  </NativeBaseProvider>
  )
}

export default Home