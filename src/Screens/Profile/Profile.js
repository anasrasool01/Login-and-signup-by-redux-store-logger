import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import actions from '../../redux/actions';

const Profile = () => {
    const userData = useSelector((state) => state.auth.userData)
    const [isLoading, setLoading] = useState(false)

    const onLogoutAlert = () => {
        Alert.alert(
            'Logout',
            'Are you sure, yout want to logout from this device',
            [{ text: 'Yes', onPress: logout }, { text: 'No', }],
            { cancelable: true }
        )
    }
    const logout = () => {
        setLoading(true)
        setTimeout(() => {
            actions.logout()
            setLoading(false)
        }, 1000);

    }
    return (
        <View style={styles.container}>
            <Text>{userData.name}</Text>
            <Text style={{ marginBottom: 16 }}>{userData.email}</Text>
            <ButtonWithLoader
                isLoading={isLoading}
                text="Logout"
                onPress={onLogoutAlert}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
});

export default Profile;