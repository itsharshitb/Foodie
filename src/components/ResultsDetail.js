import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View>
        <Image style={styles.image} source={{uri: result.image_url }}/>
        <Text style={styles.name}>{result.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16
    }
});


export default ResultsDetail;