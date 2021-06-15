import React from 'react'
import { StyleSheet} from 'react-native';
import { Footer, FooterTab, Button } from 'native-base';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

export default function TopBar() {
  return (

    <Footer >
        <FooterTab style= {style.container}>
            <Button >
                {/* <MaterialCommunityIcons name="arm-flex" size={24} color="black" /> */}
                <FontAwesome name="female" size={24} color="black" />
            </Button>
            <Button>
                <FontAwesome name="comments" size={24} color="#5c5c5c" />
            </Button>
            <Button >
                <FontAwesome name="user" size={24} color="#5c5c5c" />
            </Button>
        </FooterTab>
    </Footer>   
    
  )
}

const style = StyleSheet.create({
    container : {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 50,
    },
    shadowOpacity: 0.5,
    shadowRadius: 120,
    elevation: 20,
    }
})