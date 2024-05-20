import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const Page9 = () => {
  return (
    <View style={Stylako.container}>
      <ScrollView>
       <View>
        <Text style={{fontWeight: 'bold',fontSize:20,marginLeft:10}}>Fondation et Empire - Le Cycle de Fondation tome 2</Text>
         <View> 
           <Image 
            style={{width:150,height:200,marginLeft:10}}
             source={require('../image/fondation_et_empire_le_cycle_de_fondation_tome_2.webp')}
           />
          </View>
         <View>
          <Text style={Stylako.texte}>Genre : Science fiction</Text>
          <Text style={Stylako.texte}>Auteur: Isaac Asimov</Text>
          <Text style={Stylako.texte}>Nombre de Page: 240</Text>
         </View>
       </View>
       <View>
        <Text style={Stylako.texte}>Resumé : </Text>
        <Text style={Stylako.texte}>
        Tandis que les crises qui secouent l'Empire redoublent de violence et annoncent son effondrement définitif, la Fondation créée par le psychohistorien Hari Seldon pour sauvegarder la civilisation devient de plus en plus puissante, suscitant naturellement convoitises et visées annexionnistes. En tout premier lieu, celles de Bel Riose, jeune général qui voit dans les secrets détenus par la Fondation le moyen de monter sur le trône.
C'est alors qu'apparaît un mystérieux et invincible conquérant, surnommé le Mulet, que le plan de Seldon n'avait pas prévu...

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

export default Page9;
