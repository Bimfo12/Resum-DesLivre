import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const Page2 = () => {
  return (
    <View style={Stylako.container}>
      <ScrollView>
       <View>
        <Text style={{fontWeight: 'bold',fontSize:20,marginLeft:10}}>Le quadrant du cashflow</Text>
         <View> 
           <Image 
            style={{width:150,height:200,marginLeft:10}}
             source={require('../image/cashflow.png')}
           />
          </View>
         <View>
          <Text style={Stylako.texte}>Genre : Education financière</Text>
          <Text style={Stylako.texte}>Auteur: Robert Kiyosaki</Text>
          <Text style={Stylako.texte}>Nombre de Page: 360</Text>
         </View>
       </View>
       <View>
        <Text style={Stylako.texte}>Resumé : </Text>
        <Text style={Stylako.texte}>
        Le Quadrant du CASHFLOW® révèle pourquoi certaines personnes travaillent moins que d'autres, gagnent plus d'argent, paient moins d'impôts et apprennent à devenir financièrement libres.
Vous est-il jamais arrivé de vous demander :
Pourquoi certaines investisseurs font de l'argent en risquant peu alors que la plupart des autres investisseurs s'en tirent sans gains ni pertes ?
Pourquoi la majorité des employés passent d'un emploi à l'autre alors que d'autres quittent leur emploi et bâtissent des empires commerciaux ?
Que signifie pour ma famille et moi cette transition entre l'ère industrielle et l'ère de l'information ?
Comment puis-je tirer parti de cette transition et tracer ma voie vers la liberté financière ?
Le Quadrant du CASHFLOW® a été écrit pour vous si vous êtes prêt à :
Abandonner la sécurité d'emploi et à vous aventurer dans le monde de la liberté financière.
Effectuer de profonds changements dans votre vie.
Prendre le contrôle de votre avenir financier.
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

export default Page2;
