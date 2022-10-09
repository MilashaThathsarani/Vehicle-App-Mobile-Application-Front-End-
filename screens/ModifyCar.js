
import React, { useState,useEffect } from 'react'
import { NativeBaseProvider, Text, Input, VStack, Button} from "native-base";

export default function ModifyCar({route}) {
    const[title,setTitle]=useState('');
    const[body,setBody]=useState('');
    const[id,setId]=useState('');

    useEffect(() => {
        console.log(route.params.obj)
        setTitle(route.params.obj.title)
        setBody(route.params.obj.body)
    })


const updatePost=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: title,
    body: body,
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

}
    
  return (
    <NativeBaseProvider>
      <VStack space={4} alignItems="center">
      <Input value={title} onChangeText={(e)=>{setTitle(e)}} mt='20' mx="3" placeholder="Title" w="300" height='10' borderColor={'#182C61'} />
      <Input value={body} onChangeText={(e)=>{setBody(e)}} mt="5%" mx="3" placeholder="Body" w="300" height='40'borderColor={'#182C61'}/>
      <Input value={id} onChangeText={(e)=>{setId(e)}} mt="5%" mx="3" placeholder="Id" w="300" borderColor={'#182C61'} />
      <Button left='110' borderRadius='105' mt="10%" size="md" color='red' onPress={updatePost}>
            Update</Button>
      <Button left='110' borderRadius='105' mt="5%" size="lg" color='red' onPress={updatePost}>
            Delete</Button>
        
      </VStack>
    </NativeBaseProvider>
  )
}