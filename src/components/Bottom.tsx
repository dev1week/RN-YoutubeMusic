import React from "react";
import {Text, TouchableOpacity, View} from 'react-native';
import { BOTTOM_HEIGHT } from "../../utils";
import Icon from 'react-native-vector-icons/MaterialIcons'




export const Bottom:React.FC = () => {
  return (
  <View style={{backgroundColor:'#222', paddingBottom: 24}}>
    <View style={{height: BOTTOM_HEIGHT}}>
      <View style={{flexDirection: 'row'}}>
        <BottomItem name={'home'} title={'홈'}/>  
        <BottomItem name={'explore'} title={'둘러보기'}/>
        <BottomItem name={'library-music'} title={'보관함'}/>
      </View>
    </View>
  </View>)
}
const BottomItem:React.FC<BottomItemProps>  = (props) =>{

  return(
    <TouchableOpacity style={{alignItems:'center', flex:1}}>
      <View style={{marginVertical:4}}>
        <Icon name={props.name} color='white'></Icon>
      </View>
      <Text style={{color:'white'}}>{props.title}</Text>
    </TouchableOpacity>
  )
}

interface BottomItemProps{
  name: string;
  title: string; 
}