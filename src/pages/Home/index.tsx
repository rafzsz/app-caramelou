import React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';

import Buttons from './components/Buttons';
// import Header from './Header/Header';

import PetLostCarousel from './components/PetLostCarousel';
import StrayPetCarousel from './components/StrayPetCarousel';


import { styles } from './styles';
import Footer from '~/components/Footer';


const Home = (): JSX.Element => {
  return (
    <>
      <ScrollView style={styles.containerHome} >
        <View style={styles.contentsHome}>
          <Buttons />
          <StrayPetCarousel />
          <PetLostCarousel />
        </View>
      </ ScrollView >
      <Footer />
    </>
  )
};

export default Home;