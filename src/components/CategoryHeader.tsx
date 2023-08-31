import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";

export const CategoryHeader: React.FC <CategoryHeader> =(props)=>{
    const category = ['휴식', '에너지 충전', '집중', '운동', '출퇴근/등하교']
    
    const onPressCategory = (index: number) => {
        console.log(index); 
        const data = props.selectedCategory === index ? undifined : index;
        props.setSelectedCategory(data); 
    }
    
    return (
        <View>
            <ScrollView
                // 요소간 간격 상관없이 전체 컨테이너 기준 양끝 패딩 넣기 
                contentContainerStyle={{paddingHorizontal:20}}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                style={{flexDirection: 'row', paddingVertical:20}}>
                {category.map((value, index)=>{
                    return(
                        <TouchableOpacity onPress={()=> onPressCategory(index)}>
                            <View style={{
                                padding:8, 
                                paddingHorizontal:16, 
                                borderWidth:1, 
                                backgroundColor: '#ffffff10',
                                borderColor: '#ffffff30',
                                marginHorizontal: 4, 
                                borderRadius: 8 

                                }}>
                                <Text style={{color:'white'}}>{value}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                })}
            
            </ScrollView>
            
        </View>
    )
}

interface CategoryHeader{
    setSelectedCategory: string|undefined 
}