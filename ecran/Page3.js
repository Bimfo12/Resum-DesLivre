import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const Page3 = () => {
  return (
    <View style={Stylako.container}>
      <ScrollView>
       <View>
        <Text style={{fontWeight: 'bold',fontSize:20,marginLeft:10}}>Père riche, père pauvre</Text>
         <View> 
           <Image 
            style={{width:150,height:200,marginLeft:10}}
             source={require('../image/riche.png')}
           />
          </View>
         <View>
          <Text style={Stylako.texte}>Genre : Education financière</Text>
          <Text style={Stylako.texte}>Auteur: Robert Kiyosaki</Text>
          <Text style={Stylako.texte}>Nombre de Page: 210</Text>
         </View>
       </View>
       <View>
        <Text style={Stylako.texte}>Resumé : </Text>
        <Text style={Stylako.texte}>
        Ce que les gens riches enseignent à leurs enfants à propos de l'argent - et que ne font pas les gens pauvres 
  et de la classe moyenne ! Père riche, Père pauvre -un livre qui...? Brise le mythe selon lequel il faut gagner beaucoup
   d'argent pour devenir riche.? Remet en question cette croyance voulant que votre maison est un actif.? Explique aux 
   parents pourquoi ils ne doivent pas se fier au système d'éducation pour enseigner les rudiments de l'argent à leurs 
   enfants.? Vous enseigne quoi enseigner à vos enfants afin qu'ils connaissent plus tard la réussite financière. ROBERT 
   KIYOSAKI a remis en question et changé la perception de l'argent de dizaines de millions de gens partout dans le monde.
    Avec des opinions qui vont souvent à l'encontre de la sagesse populaire, Robert est maintenant connu pour son
     franc-parler, son insolence et son audace. Il est considéré à l'échelle mondiale comme un défenseur passionné de 
     l'éducation financière. « La principale raison pour laquelle les gens sont aux prises avec des problèmes financiers 
     est qu'ils ont passé plusieurs années à l'école, mais n'ont rien appris en ce qui concerne l'argent. Il en résulte
      que les gens apprennent à travailler au service de l'argent... mais n'apprennent jamais à mettre l'argent à leur service. »-
Robert Kiyosaki Père riche, Père pauvre -Le meilleur ouvrage de tous les temps en matière de finances personnelles
« Père riche, Père pauvre est un point de départ pour quiconque cherche à prendre le contrôle de son avenir financier. »
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

export default Page3;
