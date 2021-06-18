import React from 'react'
import { View, Image, Text } from 'react-native';

import { styles } from './styles';

const StrayPetContent = (): JSX.Element => {
    const strayBig1 = require('../../../../assets/strayBig1.png')
    const strayBig2 = require('../../../../assets/strayBig2.png')
    const pinMap = require('../../../../assets/iconPinMap.png')

    return (
        <View style={styles.contentsStrayPet}>
            <Image
                source={strayBig1}
                style={styles.imgStrayBig}
            />
            <View style={styles.containerLocation}>
                <Image source={pinMap} />
                <Text style={styles.locationPet}>
                    Rua Arthur Manoel Iwersen, 570
                </Text>
            </View>
            <Text style={styles.descriptionPet}>
                Visto por último próximo à panificadora Anjos Pães, está mancando e assustado.
            </Text>
            <Image
                source={strayBig2}
                style={styles.imgStrayBig}
            />
            <View style={styles.containerLocation}>
                <Image source={pinMap} />
                <Text style={styles.locationPet}>
                    Rua Arthur Manoel Iwersen, 570
                </Text>
            </View>
            <Text style={styles.descriptionPet}>
                Visto por último próximo à panificadora Anjos Pães, está mancando e assustado.
            </Text>
        </View>
    )
};

export default StrayPetContent;