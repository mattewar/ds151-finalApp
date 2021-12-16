import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { navigationRef } from './RootNavigation';
import { AuthProvider } from "./src/context/AuthContext";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LogoutScreen from "./src/screens/LogoutScreen";
import MarsScreen from "./src/screens/MarsScreen";

const Drawer = createDrawerNavigator();

function App() {
  
  return (
    <AuthProvider>
      <NavigationContainer ref={navigationRef}>
        <Drawer.Navigator initialRouteName="Login" >
          <Drawer.Screen name="Login" component={LoginScreen} />
          <Drawer.Screen name="Home" options={{title:'Imagem do Dia'}} component={HomeScreen} />
          <Drawer.Screen name="Mars" options={{title:'Imagens de Marte'}} component={MarsScreen} />
          <Drawer.Screen name="Log Out" component={LogoutScreen} />
        </Drawer.Navigator> 
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
