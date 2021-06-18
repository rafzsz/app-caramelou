import React from 'react'
import { View, ScrollView } from 'react-native';
import Footer from '../Footer/Footer';
import HeaderStrayPet from './HeaderStrayPet/HeaderStrayPet';
import SearchAreaStrayPet from './SearchAreaStrayPet/SearchAreaStrayPet';
import StrayPetContent from './StrayPetContent/StrayPetContent';

import { styles } from './styles';

const StrayPet = (): JSX.Element => {


    return (
        <>
            <ScrollView style={styles.containerStray}>
                <HeaderStrayPet />
                <View style={styles.contentsStray}>
                    <SearchAreaStrayPet />
                    <StrayPetContent />
                </View>
            </ScrollView>
            <Footer />
        </>
    )
};

export default StrayPet;