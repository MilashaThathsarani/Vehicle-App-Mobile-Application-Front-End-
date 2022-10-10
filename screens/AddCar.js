import React, { useState } from 'react'
import { NativeBaseProvider, Text, Input, VStack, Button} from "native-base";
import { Alert } from 'react-native';

export default function AddCar() {

    const[registerNumber,setRegisterNumber]=useState('');
    const[brand,setBrand]=useState('');
    const[vehicleNumber,setVehicleNumber]=useState('');
    const[price,setPrice]=useState('');

    const saveVehicle = async () => {

    if (registerNumber != "" && brand != "" && vehicleNumber != "" && price != "") {
      fetch('', {
        method: 'POST',
        body: JSON.stringify({
          registerNumber:registerNumber,
          brand:brand,
          vehicleNumber:vehicleNumber,
          price:price
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
      Alert.alert("Error.")
    }
  }

  const clearTextFields = () => {
    setRegisterNumber("");
    setBrand("");
    setVehicleNumber("");
    setPrice("");
}

  return (
    <NativeBaseProvider>
      <VStack space={4} alignItems="center">
        <Text mt='10' fontSize='30' color={'#182C61'} fontWeight={'bold'}>Add Car</Text>
      <Input value={registerNumber} onChangeText={(e)=>{setRegisterNumber(e)}} mt='25' mx="3" placeholder="Register Number" w="300" height='10' borderColor={'#182C61'} />
      <Input value={brand} onChangeText={(e)=>{setBrand(e)}} mt='3' mx="3" placeholder="Brand" w="300" height='10' borderColor={'#182C61'} />
      <Input value={vehicleNumber} onChangeText={(e)=>{setVehicleNumber(e)}} mt="3" mx="3" placeholder="Vehicle Number" w="300" height='10'borderColor={'#182C61'}/>
      <Input value={price} onChangeText={(e)=>{setPrice(e)}} mt="3" mx="3" placeholder="Price" w="300" borderColor={'#182C61'} height='10' />
      <Button borderRadius='10' mt="10%" size="md" backgroundColor={'#182C61'} onPress={() => { saveVehicle()}}>
            Save</Button>
      </VStack>
    </NativeBaseProvider>
  )
}