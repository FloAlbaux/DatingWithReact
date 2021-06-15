import React, { useEffect, useState} from 'react'
import { StyleSheet, Image, Alert, Text} from 'react-native';
import { Content, CardItem } from 'native-base';
import axios from 'axios'



export default function Profile() {

    const [users, setUsers]=useState([]);
    const [currentUser]= useState(0);

    async function fetchUsers()
    {
        try 
        {
            const { data } = await axios.get('https://randomuser.me/api/?gender=female&results=50')
            setUsers(data.results)
        } 
        catch (error) 
        {
            console.log(error)
            Alert.alert('Error getting users', '', [{ text: 'Retry', onPress: () => fetchUsers() }])
        }
    }
      
    useEffect(() => {
        fetchUsers()
    }, [])
    
    return (
        <Content>
            <CardItem cardBody>
              <Image source={{uri: users[currentUser].picture.large}} style={{height: 200, width: null, flex: 1, flexDirection: 'column', justifyContent:'center'}}/>
            </CardItem>
            <Text>
                {users[currentUser].login.username}
            </Text>
        </Content>   
     )
}

const styles = StyleSheet.create({
    photo: {
        height: '100%',
        borderRadius: 10,
        width : '100%'
      },
      contenaire:{
          flex:1,
          flexDirection:'column'
      }
  });