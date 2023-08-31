import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import { LogoHeader } from './src/components/LogoHeader';
import { CategoryHeader } from './src/components/CategoryHeader';
import { HeaderBackground } from './src/components/HeaderBackground';
import { Bottom } from './src/components/Bottom';
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState<string|undefined>(); 
  return (
    <View style={{flex:1}}>
      <HeaderBackground/>
      <LogoHeader/> 
      <CategoryHeader 
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
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
