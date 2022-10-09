import { NativeBaseProvider,Text,VStack,Image, Center} from "native-base";
import React from 'react'
import { Bubbles} from 'react-native-loader';

function FirstPage() {
  return (
    <NativeBaseProvider>
    <VStack space={3} alignItems="center">
    <Text color={'#182C61'} alignItems='center' mt="40" fontSize="25" fontWeight={'bold'}>Auto Mobile</Text>
    <Center>
    <Image size={140} borderRadius={80} source={require('../assets/car2.png')} alt="Alternate Text" mt='18' />
    </Center>
    <Bubbles marginTop='5' size={8} color="#182C61" />
    </VStack>
  </NativeBaseProvider>
  )
}

export default FirstPage