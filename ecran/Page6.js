import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const Page6 = () => {
  return (
    <View style={Stylako.container}>
      <ScrollView>
       <View>
        <Text style={{fontWeight: 'bold',fontSize:20,marginLeft:10}}>Guide pour investir</Text>
         <View> 
           <Image 
            style={{width:150,height:200,marginLeft:10}}
             source={require('../image/guide.png')}
           />
          </View>
         <View>
          <Text style={Stylako.texte}>Genre : Education financière</Text>
          <Text style={Stylako.texte}>Auteur: Robert Kiyosaki</Text>
          <Text style={Stylako.texte}>Nombre de Page: 519</Text>
         </View>
       </View>
       <View>
        <Text style={Stylako.texte}>Resumé : </Text>
        <Text style={Stylako.texte}>
        Par l'auteur du best-seller Père riche, père pauvre !
" Le mot investissement n'a pas la même signification pour tout le monde. Le riche, le pauvre et la classe moyenne investissent différemment. Ce livre propose un cheminement à long terme à quiconque veut devenir un investisseur prospère et placer ses capitaux dans les secteurs qui privilégient les gens riches. Comme l'indique son titre, cet ouvrage est un "guide' et n'offre aucune garantie... seulement des conseils. " –; Robert Kiyosaki. Ce Guide pour investir vous révélera :
Les règles de base de l'investissement ;
Comment réduire les risques d'investissement ;
Les 10 paliers de contrôle de l'investisseur ;
Comment convertir votre revenu gagné en valeurs de portefeuille ;
Comment devenir un investisseur chevronné ;
Comment transformer vos idées en entreprises multimillionnaires ;
Comment et pourquoi tant de gens font faillite de nos jours.
        
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

export default Page6;
