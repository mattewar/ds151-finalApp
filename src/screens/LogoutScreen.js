import React, { useContext, useState, useEffect } from "react";
import { Text, Input, Button, Image } from "react-native-elements";
import { AuthContext } from "../context/AuthContext";
import nasaLogo from '../../assets/favicon-192.png'


const LogoutScreen = ({ navigation }) => {
  const { signOut } = useContext(AuthContext);

  useEffect(() => {
    signOut();
  }, []);

  return (
    <>
    </>
  );
};

export default LogoutScreen;
