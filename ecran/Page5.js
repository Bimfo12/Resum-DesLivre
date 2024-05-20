import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const Page5 = () => {
  return (
    <View style={Stylako.container}>
      <ScrollView>
       <View>
        <Text style={{fontWeight: 'bold',fontSize:20,marginLeft:10}}>Influence et manipulation</Text>
         <View> 
           <Image 
            style={{width:150,height:200,marginLeft:10}}
             source={require('../image/manipulation.png')}
           />
          </View>
         <View>
          <Text style={Stylako.texte}>Genre : Education financière</Text>
          <Text style={Stylako.texte}>Auteur: Robert B. Cialdini</Text>
          <Text style={Stylako.texte}>Nombre de Page: 403</Text>
         </View>
       </View>
       <View>
        <Text style={Stylako.texte}>Resumé : </Text>
        <Text style={Stylako.texte}>
        Pourquoi et comment sommes-nous amenés à faire des choses contre notre gré ? Robert Cialdini, docteur en psychologie sociale, livre le résultat de plus de quinze ans de recherches sur les mécanismes et les techniques de persuasion. Dans ce livre, il explique pourquoi certaines personnes sont douées d'un remarquable talent de persuasion et comment il est possible de les battre sur leur propre terrain. Ce document nous dévoile les six secrets psychologiques qui se cachent derrière notre dangereuse tendance à nous laisser influencer, ainsi que les moyens employés par les spécialistes de la persuasion pour les exploiter à notre insu. Il nous apprend à nous en défendre, en tournant ces secrets à notre avantage. Grâce à ce livre indispensable, vous ne direz plus jamais « Oui », alors que vous pensez « non ».

        </Text>
        </View>
        </ScrollView>
    </View>
  );
};

const Stylako = StyleSheet.create({
    container:{
        backgroundColor:'lightblue',   
        flex:1,
        // justifyContent:'center'
    },
    texte:{
      marginTop:10,
      fontSize:15,
      marginLeft:10,
      marginRight:10,
    }
}
)

export default Page5;
