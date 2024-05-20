import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const Page15 = () => {
  return (
    <View style={Stylako.container}>
      <ScrollView>
       <View>
        <Text style={{fontWeight: 'bold',fontSize:20,marginLeft:10}}>Homo machinus</Text>
         <View> 
           <Image 
            style={{width:150,height:200,marginLeft:10}}
             source={require('../image/machine.png')}
           />
          </View>
         <View>
          <Text style={Stylako.texte}>Genre : Technologie</Text>
          <Text style={Stylako.texte}>Auteur: Nicolas Gutierrez C </Text>
          <Text style={Stylako.texte}>Nombre de Page: 265</Text>
         </View>
       </View>
       <View>
        <Text style={Stylako.texte}>Resumé : </Text>
        <Text style={Stylako.texte}>
        Remplacer un bras, une jambe par un membre mécatronique ; concevoir des yeux bioniques pour résoudre les problèmes de cécité ; cultiver dans des cochons des organes destinés à être greffés sur l’homme ; donner la vie grâce à un utérus artificiel ; créer ou effacer des souvenirs ; connecter un cerveau à une intelligence artificielle ; freiner le vieillissement en manipulant l’ADN ; congeler un corps pour le réveiller un siècle plus tard…
Il ne s’agit pas là de fantasmes tout droit issus d’un roman de science-fiction mais de technologies en cours de développement, de recherches scientifiques actuelles qui soulèvent bien des questions éthiques et poursuivent, à plus ou moins long terme, le but transhumaniste de créer un nouvel humain, plus fort, plus résistant, plus intelligent.
Nicolas Gutierrez C. nous invite à une plongée au coeur de la science qui oeuvre à la fabrication de ce surhomme et nous présente les technologies les plus avancées. Cette enquête inédite, menée sur trois continents et riche de nombreuses interviews de chercheurs, nous ouvre les portes d’un monde insoupçonné par le commun des mortels.
        
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

export default Page15;
