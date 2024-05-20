import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const Page10 = () => {
  return (
    <View style={Stylako.container}>
      <ScrollView>
       <View>
        <Text style={{fontWeight: 'bold',fontSize:20,marginLeft:10}}>Seconde Fondation - Le Cycle de Fondation, tome 3</Text>
         <View> 
           <Image 
            style={{width:150,height:200,marginLeft:10}}
             source={require('../image/seconde_fondation_le_cycle_de_fondation_tome_3.webp')}
           />
          </View>
         <View>
          <Text style={Stylako.texte}>Genre : Science fiction</Text>
          <Text style={Stylako.texte}>Auteur: Isaac Asimov</Text>
          <Text style={Stylako.texte}>Nombre de Page: 271</Text>
         </View>
       </View>
       <View>
        <Text style={Stylako.texte}>Resumé : </Text>
        <Text style={Stylako.texte}>
        Conçue par le psychohistorien Hari Seldon pour restreindre l'ère de chaos résultant de la décadence de l'Empire galactique, la Fondation est désormais aux mains du Mulet, un mutant imprévisible capable de manipuler les esprits et d'imposer sa volonté à quiconque. Avec ses pouvoirs et les immenses ressources que lui procure la Fondation, il s'est donné pour objectif d'étendre sa domination aux ultimes vestiges de l'Empire défunt. Mais déjà une nouvelle légende prend forme : il existerait une seconde Fondation, consacrée aux sciences mentales, œuvrant de façon occulte pour garantir l'accomplissement des desseins du légendaire Hari Seldon...
Le cycle de Fondation a obtenu en 1966 un Prix Hugo spécial le consacrant "meilleure série de science-fiction tous les temps."

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

export default Page10;
