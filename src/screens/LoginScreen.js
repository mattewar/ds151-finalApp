import React, { useContext, useState, useEffect } from "react";
import { Text, Input, Button, Image } from "react-native-elements";
import { AuthContext } from "../context/AuthContext";
import nasaLogo from '../../assets/favicon-192.png'


const LoginScreen = ({ navigation }) => {
  const [apikey, setApikey] = useState("");
  const { authState, signIn, tryLocalSignIn } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignIn();
  }, []);

  return (
    <>
      <Image style={{ width: 100, height: 100, marginHorizontal: 'auto' }} source={{ uri: nasaLogo }}></Image>
      <Input
        placeholder="Api Key"
        onChangeText={(value) => setApikey(value)}
        value={apikey}
      />
      <Button
        title="Entrar"
        onPress={() => {
          signIn({ apikey: apikey });
        }}
      />
      {authState.error ? <Text>{authState.error}</Text> : null}
    </>
  );
};

export default LoginScreen;
