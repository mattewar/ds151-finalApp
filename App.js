import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { navigationRef } from './RootNavigation';
import { AuthProvider } from "./src/context/AuthContext";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";

const Drawer = createDrawerNavigator();

function App() {
  return (
    <AuthProvider>
      <NavigationContainer ref={navigationRef}>
        <Drawer.Navigator initialRouteName="Login" >
          <Drawer.Screen name="Login" component={LoginScreen} />
          <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
