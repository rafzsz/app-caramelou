import React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { RootStackParamList } from '../../screens/RootStackPrams';

import Buttons from './Buttons/Buttons';
import Header from './Header/Header';

import { StackScreenProps } from '@react-navigation/stack';
import PetLostCarousel from './PetLostCarousel/PetLostCarousel';
import StrayPetCarousel from './StrayPetCarousel/StrayPetCarousel';



import { styles } from './styles';
import StrayPet from '../StrayPet/StrayPet';
import Footer from '../Footer/Footer';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: Props): JSX.Element => {
  return (
    <ScrollView style={styles.containerHome} >
      <Header />
      <View style={styles.contentsHome}>
        <Buttons />
        <StrayPetCarousel />
        <PetLostCarousel />
      </View>
      <Footer />
    </ ScrollView >
  )
};

export default Home;