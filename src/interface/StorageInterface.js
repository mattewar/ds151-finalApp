import AsyncStorage from "@react-native-async-storage/async-storage";

export async function setToken(token) {
    await AsyncStorage.setItem("token", token);
}

export async function getToken() {
    const data = await AsyncStorage.getItem('token');
    return data;
}

