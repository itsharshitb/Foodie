import React from 'react';
import {Text,View,StyleSheet, FlatList} from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results }) => {
    return (    //all tiles @ homescreen
        <View>
        <Text style={styles.title}>{title}</Text>
        <FlatList   //broken into tiles : resultdetail.js, above line comming from is from searchscreen
        horizontal={true}   
        data={results}
        keyExtractor={( result ) => result.id}
        renderItem={({item}) =>{
            return <ResultsDetail result={item} />
        }}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsList;