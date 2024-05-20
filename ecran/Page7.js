import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const Page7 = () => {
  return (
    <View style={Stylako.container}>
      <ScrollView>
       <View>
        <Text style={{fontWeight: 'bold',fontSize:20,marginLeft:10}}>Des fleurs pour Algernon</Text>
         <View> 
           <Image 
            style={{width:150,height:200,marginLeft:10}}
             source={require('../image/des_fleurs_pour_algernon.webp')}
           />
          </View>
         <View>
          <Text style={Stylako.texte}>Genre : Science fiction</Text>
          <Text style={Stylako.texte}>Auteur: Daniel Keyes</Text>
          <Text style={Stylako.texte}>Nombre de Page: 252</Text>
         </View>
       </View>
       <View>
        <Text style={Stylako.texte}>Resumé : </Text>
        <Text style={Stylako.texte}>
        Algernon est une souris de laboratoire dont le traitement du Pr Nemur et du Dr Strauss vient de décupler l'intelligence. Enhardis par cette réussite, les deux savants tentent alors, avec l'assistance de la psychologue Alice Kinnian, d'appliquer leur découverte à Charlie Gordon, un simple d'esprit employé dans une boulangerie. C'est bientôt l'extraordinaire éveil de l'intelligence pour le jeune homme. Il découvre un monde dont il avait toujours été exclu, et l'amour qui naît entre Alice et lui achève de le métamorphoser. Mais un jour, les facultés supérieures d'Algernon déclinent. Commence alors pour Charlie le drame atroce d'un homme qui, en pleine conscience, se sent retourner à l'état de bête...
AJOUTER UNE CITATION

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

export default Page7;
