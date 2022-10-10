import { View, FlatList,TouchableOpacity,Text} from 'react-native'
import React, { useEffect ,useState} from 'react'
import { NativeBaseProvider ,Button} from 'native-base';


export default function Home({navigation}) {

  const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://192.168.8.100:8000/car')
            .then((response) => response.json())
            .then((json) => setPosts(json));
    })


  return (
    <View style={{padding:20}}>
      <Text>Vehicle Details</Text>
    <FlatList
        data={posts}
        renderItem={({ item }) =>
            <TouchableOpacity onPress={()=>navigation.navigate("ModifyCar",{obj:item})} style={{borderWidth:1, marginBottom:'5%', padding:5, borderColor:'#182C61',borderRadius:5}}>
                <Text style={{marginBottom:10,fontWeight:'bold',color:'#182C61'}} >{item.registerNumber}</Text>
                <Text style={{marginBottom:10}} >{item.brand}</Text>
                <Text style={{marginBottom:10}} >{item.vehicleNumber}</Text>
                <Text style={{marginBottom:10}} >{item.price}</Text>
            </TouchableOpacity>
        }
    />
</View>


  )
}