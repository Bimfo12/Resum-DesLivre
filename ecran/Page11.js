import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const Page11 = () => {
  return (
    <View style={Stylako.container}>
      <ScrollView>
       <View>
        <Text style={{fontWeight: 'bold',fontSize:20,marginLeft:10}}>La Guerre des mondes</Text>
         <View> 
           <Image 
            style={{width:150,height:200,marginLeft:10}}
             source={require('../image/la_guerre_des_mondes.webp')}
           />
          </View>
         <View>
          <Text style={Stylako.texte}>Genre : Science fiction</Text>
          <Text style={Stylako.texte}>Auteur: H. G. Wells</Text>
          <Text style={Stylako.texte}>Nombre de Page: 320</Text>
         </View>
       </View>
       <View>
        <Text style={Stylako.texte}>Resumé : </Text>
        <Text style={Stylako.texte}>
        Je voyais maintenant que c'étaient les créatures les moins terrestres qu'il soit possible de concevoir. Ils étaient formés d'un grand corps rond, ou plutôt d'une grande tête ronde d'environ quatre pieds de diamètre et pourvue d'une figure. Cette face n'avait pas de narines - à vrai dire les Martiens ne semblent pas avoir été doués d'odorat - mais possédait deux grands yeux sombres, au-dessous desquels se trouvait immédiatement une sorte de bec cartilagineux.
La guerre des mondes est un récit passionnant qui relate l'invasion de la Terre par des Martiens. C'est un témoin extérieur qui nous montre le désarroi et la lutte désespérée des hommes face à un cataclysme directement sorti de l'enfer. Si les Martiens sont d'abord présentés comme des êtres faibles (la gravité terrestre, trois fois plus forte que celle de Mars, les empêche effectivement de se mouvoir rapidement), ils ne vont pas tarder à dévoiler leur puissance, qui n'aura d'égale que leur cruauté.
Chef-d'œuvre de la science-fiction moderne, ce roman est le premier à décrire des extraterrestres à l'identité propre, intelligents et totalement inhumains. La guerre des mondes fait partie de ces textes qui traversent le temps, et il a inspiré à Steven Spielberg son nouveau film à grand spectacle.

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

export default Page11;
