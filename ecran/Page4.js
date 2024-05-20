import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const Page4 = () => {
  return (
    <View style={Stylako.container}>
      <ScrollView>
       <View>
        <Text style={{fontWeight: 'bold',fontSize:20,marginLeft:10}}>Power</Text>
         <View> 
           <Image 
            style={{width:150,height:200,marginLeft:10}}
             source={require('../image/Power.jpg')}
           />
          </View>
         <View>
          <Text style={Stylako.texte}>Genre : Education financière</Text>
          <Text style={Stylako.texte}>Auteur: Robert Greene</Text>
          <Text style={Stylako.texte}>Nombre de Page: 320</Text>
         </View>
       </View>
       <View>
        <Text style={Stylako.texte}>Resumé : </Text>
        <Text style={Stylako.texte}>
        Le pouvoir? on le désire, on le craint, on s'en protège?« Le sentiment de n'avoir aucun pouvoir sur les gens et les événements est difficilement supportable : l'impuissance rend malheureux. Personne ne réclame moins de pouvoir, tout le monde en veut davantage. »  Amoral, intelligent, impitoyable et captivant, cet ouvrage colossal condense 3 000 ans d'histoire du pouvoir en 48 lois. Véritable manuel de la manipulation, il analyse la quintessence de cette sagesse millénaire, tirée de la vie des plus illustres stratèges (Sun Zi, Clausewitz), hommes d'État (Louis XIV, Bismarck, Talleyrand), courtisans (Castiglione, Gracián), séducteurs (Ninon de Lenclos, Casanova) et escrocs de l'histoire.  Certaines lois reposent sur la prudence (loi no 1 : Ne surpassez jamais le maître), d'autres demandent de la dissimulation (loi no 7 : Laissez le travail aux autres, mais recueillez-en les lauriers), d'autres encore une absence totale de compassion (loi no 15 : Écrasez complètement l'ennemi). Toutes ces lois trouveront des applications dans votre vie de tous les jours? Car, soyez en certain : le monde est une immense cour où se trament toutes sortes d'intrigues. Au lieu de nier l'évidence, tâchez d'exceller dans la course au pouvoir.  Souvent comparéà Machiavel, grand penseur italien de la Renaissance, Robert Greene est diplômé de l'université de Berkeley, Californie, en Lettres classiques. Né en 1959, écrivain et éditeur, il parle plusieurs langues couramment, dont le français. Sonpremier ouvrage, Power, s'est vendu à plus de 2 millions d'exemplaires dans le monde entier.
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

export default Page4;
