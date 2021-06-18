import React from 'react';
import { View, Image, Text } from 'react-native';

import { styles } from './styles';

const HeaderPetLost = (): JSX.Element => {
    const back = require('../../../../assets/iconBack.png');

    return (
        <View style={styles.containerHeaderPetLost}>
            <Image
                source={back}
                style={styles.iconBack}
            />
            <Text style={styles.petLostTitle}> Procura-se </Text>
        </View>


    )
};

export default HeaderPetLost;