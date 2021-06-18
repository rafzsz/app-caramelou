import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const StrayPetCarousel = (): JSX.Element => {
    const stray1 = require('../../../../assets/stray1.png')
    const stray2 = require('../../../../assets/stray2.png')
    const stray3 = require('../../../../assets/stray3.png')

    function onPressAllStray() {

    }
    return (
        <View style={styles.containerStrayPet}>
            <View style={styles.strayPetHeaderHome}>
                <Text style={styles.titlePetHome}>Animais na Rua</Text>
                <TouchableOpacity
                    onPress={onPressAllStray}
                    accessibilityLabel="Botão para registro de animais de rua"
                >
                    <Text style={styles.seeMore}>+ ver todos</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.carrousselStrayPet}>
                <Image
                    source={stray1}
                    style={styles.strayPet}
                />
                <Image
                    source={stray2}
                    style={styles.strayPet}
                />
                <Image
                    source={stray3}
                    style={styles.strayPet}
                />
            </View>
        </ View>
    )
};

export default StrayPetCarousel;