import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    return (
    <View style = {styles.background}>
    <Feather name="search" size={30} color="black" />
    <Text>Search Bar</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#ffe4c4',
        height: 50,
        borderRadius:30,
        marginHorizontal: 15
    }
});

export default SearchBar;