import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import { LogoHeader } from './components/LogoHeader';
import { CategoryHeader } from './components/CategoryHeader';
import { HeaderBackground } from './components/HeaderBackground';
import { Bottom } from './components/Bottom';
const App = () => {
  return (
    <View style={{flex:1}}>
      <LogoHeader/> 
      <CategoryHeader/>
      <HeaderBackground/>
      <ScrollView style={{borderWidth: 1}}>
        <View style={{height: 1000}}>
        <Text>list</Text>
        </View>
      </ScrollView>
      <Bottom/>
    </View>
  );
};

export default App;
