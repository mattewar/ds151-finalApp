import React, { useEffect, useState } from "react";
import { Text } from "react-native-elements";
import gitlab from '../interface/GitlabInterface';
import { View, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const [projectList, setProjectList] = useState();
    useEffect(() => {
        async function projects() {
            const response = await gitlab.get('/projects?membership=true')
            setProjectList(response.data);
        }

        projects();

    }, []);

    return (
        <>
            <ScrollView>
                <Text style={styles.title}>Projetos</Text>
                {projectList && projectList.map(a => {
                    return (
                        <View key={a.id} style={styles.noteView}>
                            <Text style={styles.title}>{a.name_with_namespace}</Text>
                        </View>
                    )
                })}
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
