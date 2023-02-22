import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

const ButtonTodo = ({
    isLoading,
    text,
    onPress
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btnStyle}>

            {!!isLoading ? <ActivityIndicator size="large" color="white" />
                : <Text style={styles.textStyle}>{text}</Text>
            }
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btnStyle: {
        width : 200,
        // backgroundColor: "grey",
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 16,
        justifyContent: "space-between",
        padding: 16
      
    },
    textStyle: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
});

export default ButtonTodo;