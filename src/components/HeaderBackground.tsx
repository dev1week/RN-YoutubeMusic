import React from "react";
import { Text, View } from "react-native";


export const HeaderBackground:React.FC = () =>{
    return (
        <View style={{
            position: 'absolute', 
            height: 300,
            width: '100%',
            backgroundColor: '#222'
        }}>
            <Text> Header BG</Text>
        </View>
    )

}