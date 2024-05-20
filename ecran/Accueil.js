import React from 'react';
import Listanany from './listany/Listanany';
import {TextInput, 
         StyleSheet, 
         Text, 
         View, 
         Image, 
         ScrollView, 
         Dimensions, 
         Button,
         Pressable,
          TouchableOpacity } from 'react-native';



const Accueil = ({navigation}) => {

   const hundlePress = () =>{
      navigation.navigate('Page1')
   }
   const hundlePress2 = () =>{
      navigation.navigate('Page2')
   }
   const hundlePress3 = () =>{
      navigation.navigate('Page3')
   }
   const hundlePress4 = () =>{
      navigation.navigate('Page4')
   }
   const hundlePress5 = () =>{
      navigation.navigate('Page5')
   }
   const hundlePress6 = () =>{
      navigation.navigate('Page6')
   }
   const hundlePress7 = () =>{
      navigation.navigate('Page7')
   }
   const hundlePress8 = () =>{
      navigation.navigate('Page8')
   }
   const hundlePress9 = () =>{
      navigation.navigate('Page9')
   }
   const hundlePress10 = () =>{
      navigation.navigate('Page10')
   }
   const hundlePress11 = () =>{
      navigation.navigate('Page11')
   }
   const hundlePress12 = () =>{
      navigation.navigate('Page12')
   }
   const hundlePress13 = () =>{
      navigation.navigate('Page13')
   }
   const hundlePress14 = () =>{
      navigation.navigate('Page14')
   }
   const hundlePress15 = () =>{
      navigation.navigate('Page15')
   }
   const hundlePress16 = () =>{
      navigation.navigate('Page16')
   }
   const hundlePress17 = () =>{
      navigation.navigate('Page17')
   }
  return (
    <View style={Stylako.container}>
       <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{marginLeft:20, fontWeight: 'bold'}}>Education financière</Text>
          <ScrollView snapToInterval={200} decelerationRate='normal' alwaysBounceHorizontal={true} horizontal
          showsHorizontalScrollIndicator={false}
          >
            <Pressable  
            onPress={hundlePress}>
           <Listanany
              imageUri={require('../image/Arnold-Schwarzenegger.jpg')}
              Auteur = "Arnold Schwarzenegger"
              Titre = "TOTAL RECALL"
           />
           </Pressable>

           <Pressable  
            onPress={hundlePress2}>
           <Listanany
              imageUri={require('../image/cashflow.png')} 
              Auteur = "Robert Kiyosaki"
              Titre = "Le quadrant du cashflow"
           />
           </Pressable>

           <Pressable  
            onPress={hundlePress3}>
           <Listanany
              imageUri={require('../image/riche.png')}
              Auteur = "Robert Kiyosaki"
              Titre = "Père riche, père pauvre "
           />
           </Pressable>

           <Pressable  
            onPress={hundlePress4}>
             <Listanany
              imageUri={require('../image/Power.jpg')}
              Auteur = "Robert Greene"
              Titre = "Power: Les 48 lois du pouvoir"
           />
           </Pressable>
            
           <Pressable   onPress={hundlePress5}>
            <Listanany
              imageUri={require('../image/manipulation.png')}
              Auteur = "Robert B. Cialdini "
              Titre = "Influence et manipulation"
           />
           </Pressable>
           <Pressable   onPress={hundlePress6}>
          <Listanany
              imageUri={require('../image/guide.png')}
              Auteur = " Robert T. Kiyosaki "
              Titre = "Guide pour investir"
           />    
           </Pressable>   
        
       </ScrollView>


          <Text style={{marginLeft:20,fontWeight: 'bold'}}>Science fiction</Text>
          <ScrollView snapToInterval={200} decelerationRate='normal' alwaysBounceHorizontal={true} horizontal 
           showsHorizontalScrollIndicator={false}
          >
            <Pressable   onPress={hundlePress7}>
           <Listanany
              imageUri={require('../image/des_fleurs_pour_algernon.webp')}
              Auteur = "Daniel Keyes"
              Titre = "Des fleurs pour Algernon"
           />
           </Pressable>

           <Pressable   onPress={hundlePress8}>
           <Listanany
              imageUri={require('../image/la_planete_des_singes.jpg')}
              Auteur = "Pierre Boulle"
              Titre = "La Planète des singes"
           />
           </Pressable>

           <Pressable   onPress={hundlePress9}>
           <Listanany
              imageUri={require('../image/fondation_et_empire_le_cycle_de_fondation_tome_2.webp')}
              Auteur = "Isaac Asimov"
              Titre = "Fondation et Empire - Le Cycle de Fondation tome 2 "
           />
           </Pressable>

           <Pressable   onPress={hundlePress10}>
           <Listanany
              imageUri={require('../image/seconde_fondation_le_cycle_de_fondation_tome_3.webp')}
              Auteur = "Isaac Asimov"
              Titre = "Seconde Fondation - Le Cycle de Fondation, tome 3"
           />
           </Pressable>
           <Pressable   onPress={hundlePress11}>
            <Listanany
              imageUri={require('../image/la_guerre_des_mondes.webp')}
              Auteur = "H. G. Wells"
              Titre = "La Guerre des mondes"
           />
           </Pressable>
           <Pressable   onPress={hundlePress12}>
          <Listanany
              imageUri={require('../image/spin.webp')}
              Auteur = " Robert Charles Wilson "
              Titre = "Spin"
           />
           </Pressable>  
        
                  
       </ScrollView>







          <Text style={{marginLeft:20,fontWeight: 'bold'}}>Technologie</Text>
          <ScrollView snapToInterval={200} decelerationRate='normal' alwaysBounceHorizontal={true} horizontal 
           showsHorizontalScrollIndicator={false}
          >
            <Pressable   onPress={hundlePress13}>
           <Listanany
              imageUri={require('../image/complot.png')}
              Auteur = "Claire Séverac"
              Titre = "COMPLOT MONDIAL CONTRE LA SANTÉ"
           />
           </Pressable>
            <Pressable   onPress={hundlePress14}>
           <Listanany
              imageUri={require('../image/revolution.png')}
              Auteur = "Klaus Schwab"
              Titre = "La quatrième révolution industrielle"
           />
           </Pressable>
            <Pressable   onPress={hundlePress15}>
           <Listanany
              imageUri={require('../image/machine.png')}
              Auteur = "Nicolas Gutierrez C."
              Titre = "Homo machinus"
           />
           </Pressable>
            <Pressable   onPress={hundlePress16}>
           <Listanany
              imageUri={require('../image/bio.png')}
              Auteur = "Julien Fouin"
              Titre = "Maisons bio"
           />
           </Pressable>
            <Pressable   onPress={hundlePress17}>
           <Listanany
              imageUri={require('../image/art.png')}
              Auteur = "Louise Poissant Ernestine Daubner"
              Titre = "Art et biotechnologies"
           />
           </Pressable>

           
                  
       </ScrollView>


      </ScrollView>
      </View>
  );
};

const Stylako = StyleSheet.create({
    container:{
        backgroundColor:'lightblue', 
        flex:1,
       },
    entete: {
      height: 80,
      width: "100%",
      backgroundColor: "rgb(60,30,70)",
    },
  
    reniniView: {
      height: "auto",
      width: "100%"
    },
  
    titre: {
      fontSize: "200%",
      color: "red",
      textAlign: "center",
      
    },
  
    contenaire: {
      top: 20,
      width: "90%",
      height: "100%",
    },
  
}
)

export default Accueil;
