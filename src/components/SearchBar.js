import React from 'react';
import {View, TextInput, Text , StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    return (
    <View style = {styles.background}>
    <Feather name="search" size={30} color="black" />
    <TextInput
    style={styles.inputStyle} 
    placeholder= "Seacrch"
    />
    </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#ffe4c4',
        height: 50,
        borderRadius:30,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        borderColor: 'black',
        borderWidth: 1,
        flex: 1
    }
});

export default SearchBar;