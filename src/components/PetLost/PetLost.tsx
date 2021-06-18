import React from 'react'
import { View, ScrollView } from 'react-native';
import HeaderPetLost from './HeaderPetLost/HeaderPetLost';
import SearchAreaPetLost from './SearchAreaPetLost/SearchAreaPetLost';
import PetLostContent from './PetLostContent/PetLostContent';

import { styles } from './styles';
import Footer from '../Footer/Footer';

const PetLost = (): JSX.Element => {


    return (
        <>
            <ScrollView style={styles.containerLost}>
                <HeaderPetLost />
                <View style={styles.contentsLost}>
                    <SearchAreaPetLost />
                    <PetLostContent />
                </View>
            </ScrollView>
            <Footer />
        </>
    )
};

export default PetLost;