import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

//2nd screen

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);

    const id = navigation.getParam('id');
    console.log(result);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    
    useEffect(() => {
        getResult(id);
    },[]);

    if(!result) {
        return null;
    }

    return (
        <View>
        <Text style={styles.name}>{result.name}</Text>
        <Text style={styles.contact}>Contact: {result.phone}</Text>
        <FlatList 
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
            return <Image style={styles.image} source={{uri: item}} />
        }}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 500,
        borderRadius: 5,
        marginBottom: 5
    },
    name: {
        fontWeight:'bold',
        marginBottom: 30,
        fontSize: 30
    },
    contact: {
        fontSize: 20,
        fontStyle: 'italic'
    }
});

export default ResultsShowScreen;