import React from 'react';
import {Text,View,StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';
// ResultsList: one tile which is repeating for all foods
const ResultsList = ({ title, results, navigation }) => {
    return (    //all tiles @ homescreen
        <View style= {styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList   //broken into tiles : resultdetail.js, above line comming from is from searchscreen
        horizontal={true} 
        showsHorizontalScrollIndicator={false}  
        data={results}
        keyExtractor={( result ) => result.id}
        renderItem={({item}) =>{
            return (
                <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}>
                <ResultsDetail result={item} />
                </TouchableOpacity>
            )
        }}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default withNavigation(ResultsList);