import React from 'react';
import { View, Image, Text } from 'react-native';

import { styles } from './styles';
const HeaderLogin = (): JSX.Element => {
    const petsLogin = require('../../../../assets/login-pets.png')
    return (
        <View style={styles.containerHeader}>
            <Image
                source={petsLogin}
                style={styles.loginPets}
            />
        </View>


    )
};

export default HeaderLogin;