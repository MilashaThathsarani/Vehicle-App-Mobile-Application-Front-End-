import { View, FlatList,TouchableOpacity,Text} from 'react-native'
import React, { useEffect ,useState} from 'react'

export default function Home({navigation}) {

  const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setPosts(json));
    })


  return (
    <View style={{padding:20}}>
      <Text>Vehicle Details</Text>
    <FlatList
        data={posts}
        renderItem={({ item }) =>
            <TouchableOpacity onPress={()=>navigation.navigate("ModifyCar",{obj:item})} style={{borderWidth:1, marginBottom:'5%', padding:5}}>
                <Text style={{marginBottom:10,fontWeight:'bold'}} >{item.title}</Text>
                <Text style={{marginBottom:10}} >{item.body}</Text>
            </TouchableOpacity>
        }
    />
</View>
  )
}