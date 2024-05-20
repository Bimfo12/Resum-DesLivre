import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const Page13 = () => {
  return (
    <View style={Stylako.container}>
      <ScrollView>
       <View>
        <Text style={{fontWeight: 'bold',fontSize:20,marginLeft:10}}>La quatrième révolution industrielle</Text>
         <View> 
           <Image 
            style={{width:150,height:200,marginLeft:10}}
             source={require('../image/revolution.png')}
           />
          </View>
         <View>
          <Text style={Stylako.texte}>Genre : Technologie</Text>
          <Text style={Stylako.texte}>Auteur: Klaus Schwab </Text>
          <Text style={Stylako.texte}>Nombre de Page: 208</Text>
         </View>
       </View>
       <View>
        <Text style={Stylako.texte}>Resumé : </Text>
        <Text style={Stylako.texte}>
        La quatrième révolution industrielle ne ressemble à rien de ce que l’humanité a connu par le passé. Avec les nouvelles technologies, la fusion des mondes physique, numérique et biologique porte autant de promesses que de dangers potentiels. Par sa rapidité et sa globalité, cette révolution nous oblige à repenser notre politique, notre économie, et le sens même de notre humanité.
Depuis plus de 40 ans, Klaus Schwab, Fondateur et président exécutif du World Economic Forum, joue un rôle central pour penser la globalisation. Cette position privilégiée lui a permis d’observer de près la réaction des leaders mondiaux face à la révolution numérique. Dans ce livre, il souligne les espoirs et les options qu’elle induit, sur des champs immenses – l’intelligence artificielle, la robotique, l’internet des objets, les véhicules autonomes, l’impression en 3D, les nanotechnologies, les biotechnologies, le stockage d’énergie, l’informatique quantique... Pour Schwab, la quatrième révolution industrielle relève de notre responsabilité : nous en sommes, collectivement, les acteurs.
L’auteur suggère enfin comment de nouvelles formes de collaboration et de gouvernance nous permettront d’orienter la quatrième révolution industrielle au profit de tous. En bâtissant un avenir dans lequel l’innovation et la technologie sont orientées vers le bien commun, nous aiderons l’humanité à se hisser à un degré de moralité supérieure.
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

export default Page13;
