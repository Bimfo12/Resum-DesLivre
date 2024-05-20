import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const Page17 = () => {
  return (
    <View style={Stylako.container}>
      <ScrollView>
       <View>
        <Text style={{fontWeight: 'bold',fontSize:20,marginLeft:10}}>Art et biotechnologies</Text>
         <View> 
           <Image 
            style={{width:150,height:200,marginLeft:10}}
             source={require('../image/art.png')}
           />
          </View>
         <View>
          <Text style={Stylako.texte}>Genre : Technologie</Text>
          <Text style={Stylako.texte}>Auteur: Louise Poissant Ernestine Daubner </Text>
          <Text style={Stylako.texte}>Nombre de Page: 380</Text>
         </View>
       </View>
       <View>
        <Text style={Stylako.texte}>Resumé : </Text>
        <Text style={Stylako.texte}>
        Les biotechnologies promettent pour très bientôt des découvertes fondamentales et des développements majeurs au niveau des traitements médicaux, de l'accroissement de la production agricole, de la cartographie complète du génome de plusieurs espèces, de la reconfiguration de l'humain sur mesure. Leur puissance annoncée fascine et inquiète. Ces technologies soulèvent de nombreux doutes et posent des questions qui ne connaissent pas de réponses simples. Des théoriciens et des artistes internationaux abordent ces questions en présentant des recherches et des réalisations artistiques situées au croisement de l'art, de la science et des systèmes artificiels.
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

export default Page17;
