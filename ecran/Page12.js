import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const Page12 = () => {
  return (
    <View style={Stylako.container}>
      <ScrollView>
       <View>
        <Text style={{fontWeight: 'bold',fontSize:20,marginLeft:10}}>Spin</Text>
         <View> 
           <Image 
            style={{width:150,height:200,marginLeft:10}}
             source={require('../image/spin.webp')}
           />
          </View>
         <View>
          <Text style={Stylako.texte}>Genre : Science fiction</Text>
          <Text style={Stylako.texte}>Auteur: Robert Charles Wilson </Text>
          <Text style={Stylako.texte}>Nombre de Page: 560</Text>
         </View>
       </View>
       <View>
        <Text style={Stylako.texte}>Resumé : </Text>
        <Text style={Stylako.texte}>
        La vie de Tyler Dupree est inextricablement liée à celle des jumeaux Lawton, Diane et Jason. Ils étaient ensemble la nuit où la Terre a été coupée du reste de l’univers par une mystérieuse barrière opaque à l’extérieur de laquelle le temps s’écoule des millions de fois plus vite. Il ne reste donc plus que quelques décennies avant que le Soleil ne transforme la Terre en une boule de feu, exterminant ainsi l’humanité. Jason n’a alors plus qu’un but dans la vie : comprendre pourquoi et par qui la barrière a été installée.
Roman de science-fiction vertigineux, Spin gagne le pari de nous transporter dans un futur lointain qui reste familier. Une réussite couronnée aux États-Unis par la plus haute distinction de la science-fiction, le prix Hugo, et en France par le Grand Prix de l’Imaginaire.
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

export default Page12;
