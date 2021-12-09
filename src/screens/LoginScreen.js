import React, { useContext, useState, useEffect } from "react";
import { Text, Input, Button } from "react-native-elements";
import { AuthContext } from "../context/AuthContext";


const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { authState, signIn, tryLocalSignIn } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignIn();
  },[]);

  return (
    <>
      <Input
        placeholder="Username"
        onChangeText={(value) => setUsername(value)}
        value={username}
      />
      <Input
        placeholder="Password"
        onChangeText={(value) => setPassword(value)}
        value={password}
        secureTextEntry={true}
      />
      <Button
        title="Entrar"
        onPress={() => {
          signIn({ username, password });
        }}
      />
      {authState.error ? <Text>{authState.error}</Text> : null}
    </>
  );
};

export default LoginScreen;
