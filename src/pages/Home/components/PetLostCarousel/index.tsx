import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import NavigationService from '~/services/NavigationService';

import Lost1 from "~/assets/lost1.png";
import Lost2 from "~/assets/lost2.png";
import Lost3 from "~/assets/lost3.png";

import { styles } from './styles';

const PetLostCarousel = (): JSX.Element => {
    function onPressAllLost() {
        NavigationService.navigate('PetLost');
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
                    source={Lost1}
                    style={styles.petLost}
                />
                <Image
                    source={Lost2}
                    style={styles.petLost}
                />
                <Image
                    source={Lost3}
                    style={styles.petLost}
                />
            </View>
        </ View>
    )
};

export default PetLostCarousel;