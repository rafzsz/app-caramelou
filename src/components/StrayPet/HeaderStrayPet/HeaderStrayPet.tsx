import React from 'react';
import { View, Image, Text } from 'react-native';

import { styles } from './styles';

const HeaderStrayPet = (): JSX.Element => {
    const back = require('../../../../assets/iconBack.png');

    return (
        <View style={styles.containerHeaderStrayPet}>
            <Image
                source={back}
                style={styles.iconBack}
            />
            <Text style={styles.strayPetTitle}> Animais de Rua </Text>
        </View>


    )
};

export default HeaderStrayPet;