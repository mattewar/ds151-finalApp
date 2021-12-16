import React, { useEffect, useState } from "react";
import { Text } from "react-native-elements";
import nasa from '../interface/NasaInterface';
import {ScrollView , Image} from 'react-native';

const MarsScreen = ({ navigation }) => {
    const [images, setImages] = useState();
    useEffect(() => {
        async function projects() {
            const response = await nasa.get('mars-photos/api/v1/rovers/curiosity/photos?sol=1000')
            setImages(response.data.photos)
        }

        projects();

    }, []);

    return (
        <>
            <ScrollView style={{ padding: 10 }}>
                {images != undefined ? images.map((img) => {return (<Image style={{width:200,height:200, marginTop:5, marginHorizontal:'auto'}} source={{ uri: img.img_src }}></Image>)}) : <Text>Carregando</Text>}
            </ScrollView>
        </>
    );
};

export default MarsScreen;
