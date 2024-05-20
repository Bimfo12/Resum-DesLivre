import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const Page8 = () => {
  return (
    <View style={Stylako.container}>
      <ScrollView>
       <View>
        <Text style={{fontWeight: 'bold',fontSize:20,marginLeft:10}}>La Planète des singes</Text>
         <View> 
           <Image 
            style={{width:150,height:200,marginLeft:10}}
             source={require('../image/la_planete_des_singes.jpg')}
           />
          </View>
         <View>
          <Text style={Stylako.texte}>Genre : Science fiction</Text>
          <Text style={Stylako.texte}>Auteur: Pierre Boulle</Text>
          <Text style={Stylako.texte}>Nombre de Page: 240</Text>
         </View>
       </View>
       <View>
        <Text style={Stylako.texte}>Resumé : </Text>
        <Text style={Stylako.texte}>
        Ce message retrace l’histoire d’une mission d’exploration vers l’étoile supergéante Bételgeuse en l’an 2500. L’expédition comprend le professeur Antelle, Arthur Levain, un jeune physicien, et Ulysse Mérou, le journaliste narrateur de ce récit. Un chimpanzé, Hector, est aussi du voyage. Ils atteignent enfin l’étoile après une traversée interminable.

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

export default Page8;
