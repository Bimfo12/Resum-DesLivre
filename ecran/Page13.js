import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const Page13 = () => {
  return (
    <View style={Stylako.container}>
      <ScrollView>
       <View>
        <Text style={{fontWeight: 'bold',fontSize:20,marginLeft:10}}>COMPLOT MONDIAL CONTRE LA SANTÉ</Text>
         <View> 
           <Image 
            style={{width:150,height:200,marginLeft:10}}
             source={require('../image/complot.png')}
           />
          </View>
         <View>
          <Text style={Stylako.texte}>Genre : Technologie</Text>
          <Text style={Stylako.texte}>Auteur: Claire Séverac </Text>
          <Text style={Stylako.texte}>Nombre de Page: 461</Text>
         </View>
       </View>
       <View>
        <Text style={Stylako.texte}>Resumé : </Text>
        <Text style={Stylako.texte}>
        On a retenu les sommes colossales dépensées pour sauver le système bancaire. Elles sont dérisoires à côté du pactole que se partagent les 4 grands cartels mondiaux : chimie, biotechnologie, agro-alimentaire et médico-pharmaceutique. Les consortiums de l agro-alimentaire ont réussi à faire disparaître toute l agriculture vivrière, tout l artisanat des métiers de bouches, toutes les particularités gastronomiques régionales, tout ce que les consommateurs pouvaient mettre dans leurs assiettes sans passer à leur caisse, avec la complicité des cartels de la distribution. Comment l énorme comédie des normes alimentaires a-t-elle transformé notre nourriture en poison ? À qui sert réellement le codex Alimentarius ? Et pour qui tourne réellement l OMC ? Depuis des décennies les grands groupes pharmaceutiques sont les financiers des plus grandes écoles et des formations de médecins, ils occupent en sous-mains les commissions sanitaires des pays et des instances internationales, ils sont partout, mais on ne les voit nulle part, comment opèrent-ils ? Comment étouffent ils les scandales sanitaires ? De la naissance à la mort, chaque individu est une mine d or pour eux, les pandémies des périodes fastueuses ! Et la « vraie-fausse » pandémie de grippe A en est un exemple de plus. Pour comprendre les interconnections de ces systèmes mafieux il fallait dresser leurs portraits et pratiques dans un même ouvrage. C est désormais chose faite : après des mois d enquête, Claire Séverac nous démontre, dans ce réquisitoire implacable, pourquoi et comment notre santé est en danger.
                
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
