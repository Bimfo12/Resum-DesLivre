import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const Page16 = () => {
  return (
    <View style={Stylako.container}>
      <ScrollView>
       <View>
        <Text style={{fontWeight: 'bold',fontSize:20,marginLeft:10}}>Maisons bio</Text>
         <View> 
           <Image 
            style={{width:150,height:200,marginLeft:10}}
             source={require('../image/bio.png')}
           />
          </View>
         <View>
          <Text style={Stylako.texte}>Genre : Technologie</Text>
          <Text style={Stylako.texte}>Auteur: Julien Fouin </Text>
          <Text style={Stylako.texte}>Nombre de Page: 265</Text>
         </View>
       </View>
       <View>
        <Text style={Stylako.texte}>Resumé : </Text>
        <Text style={Stylako.texte}>
        Une maison saine et écologique qui soit aussi économique et confortable, c'est aujourd'hui possible ! Dans cet ouvrage, vous trouverez tous les conseils pour restaurer, aménager et décorer votre maison avec des matériaux sains et naturels, respectueux de l'homme et de l'environnement. Maisons Bio vous explique : quelles sont les mesures à prendre avant de faire construire votre maison ; comment choisir les matériaux non polluants pour l'isolation, le chauffage, l'ossature et la toiture; quels revêtements utiliser pour les sols et les murs ; les meilleures solutions pour l'installation électrique et la distribution de l'eau. Maisons Bio, c'est aussi un carnet d'adresses de professionnels de la construction saine, pour vous aider à trouver les matériaux, les conseils et les idées en matière de bioconstruction.

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

export default Page16;
