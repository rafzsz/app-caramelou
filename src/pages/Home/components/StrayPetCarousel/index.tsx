import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import NavigationService from '~/services/NavigationService';

import { styles } from './styles';

import stray1 from "~/assets/stray1.png";
import stray2 from "~/assets/stray2.png";
import stray3 from "~/assets/stray3.png";

const StrayPetCarousel = (): JSX.Element => {
    function onPressAllStray() {
        NavigationService.navigate("StrayPet")
    }
    return (
        <View style={styles.containerStrayPet}>
            <View style={styles.strayPetHeaderHome}>
                <Text style={styles.titlePetHome}>Animais na Rua</Text>
                <TouchableOpacity
                    onPress={() => onPressAllStray()}
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