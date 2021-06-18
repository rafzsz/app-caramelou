import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const PetLostCarousel = (): JSX.Element => {
    const lost1 = require('../../../../assets/lost1.png');
    const lost2 = require('../../../../assets/lost2.png');
    const lost3 = require('../../../../assets/lost3.png');

    function onPressAllLost() {

    }
    return (
        <View style={styles.containerPetLost}>
            <View style={styles.petLostHeaderHome}>
                <Text style={styles.titlePetHome}>Animais Perdidos</Text>
                <TouchableOpacity
                    onPress={onPressAllLost}
                    accessibilityLabel="Botão para registro de animais de rua"
                >
                    <Text style={styles.seeMore}>+ ver todos</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.carrousselPetLost}>
                <Image
                    source={lost1}
                    style={styles.petLost}
                />
                <Image
                    source={lost2}
                    style={styles.petLost}
                />
                <Image
                    source={lost3}
                    style={styles.petLost}
                />
            </View>
        </ View>
    )
};

export default PetLostCarousel;