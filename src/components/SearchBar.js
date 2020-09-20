import React from 'react';
import {View, TextInput, Text , StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
    <View style = {styles.backgroundStyle}>
    <Feather name="search" style={styles.iconStyle} />
    <TextInput
    autoCapitalize="none"
    autoCorrect={false}
    style={styles.inputStyle} 
    placeholder= "Seacrch"
    value= {term}
    onChangeText={(newTerm) => onTermChange(newTerm)} //can be only: {onTermChange}
    onEndEditing={() => onTermSubmit()}
    />
    </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#dae3cf',
        height: 50,
        borderRadius:30,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        fontSize: 18,
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 13
    }
});

export default SearchBar;