import React, { useEffect, useState } from "react";
import { Text } from "react-native-elements";
import nasa from '../interface/NasaInterface';
import { View, StyleSheet, ScrollView , Image} from 'react-native';

const HomeScreen = ({ navigation }) => {
    const [image, setImage] = useState('');
    useEffect(() => {
        async function projects() {
            const response = await nasa.get('planetary/apod')
            setImage(response.data.url)
        }

        projects();

    }, []);

    return (
        <>
            <ScrollView style={{ padding: 10 }}>
                {image != '' ? <Image style={{width:'100%',height:500}} source={{ uri: image }}></Image> : <Text>Sem imagem</Text>}
            </ScrollView>
        </>
    );
};
const styles = StyleSheet.create({
    noteView: {
        backgroundColor: "lightblue",
        padding: 5,
        marginTop: 10,
        marginHorizontal: 30,
        minHeight: 100,
    },
    title: {
        fontSize: 24,
        textAlign: "center"
    },
});

export default HomeScreen;
