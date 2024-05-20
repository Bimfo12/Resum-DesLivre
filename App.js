import { StatusBar } from 'expo-status-bar';
import Accueil from './ecran/Accueil';
import Contacte from './ecran/Contacte';
import Apropos from './ecran/Apropos';
import Page1 from './ecran/Page1';
import Page2 from './ecran/Page2';
import Page3 from './ecran/Page3';
import Page4 from './ecran/Page4';
import Page5 from './ecran/Page5';
import Page6 from './ecran/Page6';
import Page7 from './ecran/Page7';
import Page8 from './ecran/Page8';
import Page9 from './ecran/Page9';
import Page10 from './ecran/Page10';
import Page11 from './ecran/Page11';
import Page12 from './ecran/Page12';
import Page13 from './ecran/Page13';
import Page14 from './ecran/Page14';
import Page15 from './ecran/Page15';
import Page16 from './ecran/Page16';
import Page17 from './ecran/Page17';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';



const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "slateblue" } }}>
        <Stack.Screen  name="Accueil" component={Accueil} />
        <Stack.Screen  name="Contacte" component={Contacte} />
        <Stack.Screen  name="Apropos" component={Apropos} />
        <Stack.Screen name="Page1" component={Page1} options={{title:'Total Recall'}}/>
        <Stack.Screen name="Page2" component={Page2} options={{title:'Le quadrant du cashflow'}}/>
        <Stack.Screen name="Page3" component={Page3} options={{title:'Père riche, père pauvre'}}/>
        <Stack.Screen name="Page4" component={Page4} options={{title:'Power'}}/>
        <Stack.Screen name="Page5" component={Page5} options={{title:'Influence et manipulation'}}/>
        <Stack.Screen name="Page6" component={Page6} options={{title:'Guide pour investir'}}/>
        <Stack.Screen name="Page7" component={Page7} options={{title:'Des fleurs pour Algernon'}}/>
        <Stack.Screen name="Page8" component={Page8} options={{title:'La Planète des singes'}}/>
        <Stack.Screen name="Page9" component={Page9} options={{title:'Fondation et Empire - Le Cycle de Fondation tome 2'}}/>
        <Stack.Screen name="Page10" component={Page10} options={{title:'Seconde Fondation - Le Cycle de Fondation, tome 3'}}/>
        <Stack.Screen name="Page11" component={Page11} options={{title:'La Guerre des mondes'}}/>
        <Stack.Screen name="Page12" component={Page12} options={{title:'Spin'}}/>
        <Stack.Screen name="Page13" component={Page13} options={{title:'COMPLOT MONDIAL CONTRE LA SANTÉ'}}/>
        <Stack.Screen name="Page14" component={Page14} options={{title:'La quatrième révolution industrielle'}}/>
        <Stack.Screen name="Page15" component={Page15} options={{title:'Homo machinus'}}/>
        <Stack.Screen name="Page16" component={Page16} options={{title:'Maisons bio'}}/>
        <Stack.Screen name="Page17" component={Page17} options={{title:'Art et biotechnologies'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
