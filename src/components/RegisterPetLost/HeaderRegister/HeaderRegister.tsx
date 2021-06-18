import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const HeaderRegister = (): JSX.Element => {
    const back = require('../../../../assets/iconBack.png');

    return (
        <View style={styles.containerHeaderRegister}>
            <TouchableOpacity
                accessibilityLabel="Voltar para home"
            >
                <Image
                    source={back}
                    style={styles.iconBack}
                />
            </TouchableOpacity>
            <Text style={styles.registerTitle}> Cadastro </Text>
        </View>


    )
};

export default HeaderRegister;