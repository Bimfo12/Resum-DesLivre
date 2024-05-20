import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Listanany from './listany/Listanany';
const Page1 = () => {
  return (
    <View style={Stylako.container}>
    <ScrollView>
       <View>
        <Text style={{fontWeight: 'bold',fontSize:20,marginLeft:10}}>Total Recall</Text>
         <View> 
           <Image 
            style={{width:150,height:200,marginLeft:10}}
             source={require('../image/Arnold-Schwarzenegger.jpg')}
           />
          </View>
         <View>
          <Text style={Stylako.texte}>Genre : Education financière</Text>
          <Text style={Stylako.texte}>Auteur: Arnold Schwarzenegger</Text>
          <Text style={Stylako.texte}>Nombre de Page: 660</Text>
         </View>
       </View>
       <View>
        <Text style={Stylako.texte}>Resumé : </Text>
        <Text style={Stylako.texte}>
        Faut-il présenter celui que l'on a surnommé, à tour de rôle, le « Chêne autrichien »
         pendant ses années de culturisme, puis « Schwarzy » pendant sa carrière d'acteur et, 
         plus récemment, « Gouvernator » pendant ses deux mandats à la tête de la Californie ?
Né en Autriche en 1947, il est devenu l'un des plus grands culturistes de l'Histoire, avec notamment 
5 titres de Monsieur Univers et 7 titres de Monsieur Olympia, et a immigré en 1968 aux Etats-Unis, où
 son physique hors normes lui a ouvert les portes d'Hollywood. Il y fera une carrière exceptionnelle, 
 devenant l'une des plus grandes vedettes du cinéma mondial dans les années 1980-1990. Comment ne pas se 
 souvenir de Total Recall, de la série des Terminator, mais aussi des comédies Un flic à la maternelle et 
 Jumeaux ? Politiquement engagé dans le Parti républicain, il a été élu gouverneur de l'Etat de Californie en 
 2003, puis réélu à ce poste en 2006. On a dit de lui que si la Constitution n'interdisait pas à un Américain
  naturalisé de briguer la présidence des Etats-Unis, il serait peut-être aujourd'hui à la Maison-Blanche..
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

export default Page1;
