import React from 'react';
import { Alert, Image, TouchableOpacity, View } from 'react-native';

import iconHome from "~/assets/iconHome.png";
import iconPets from "~/assets/iconPets.png";
import iconGps from "~/assets/iconGps.png";
// import iconMenu from "~/assets/iconMenu.png";
import iconOut from "~/assets/iconOut.png";

import { styles } from './styles';

import NavigationService from '~/services/NavigationService';

const Footer = (): JSX.Element => {
    return (
        <View style={styles.containerFooter}>
            <TouchableOpacity
                onPress={() => NavigationService.navigate('Home')}
            >
                <Image
                    source={iconHome}
                    style={{ width: 30, height: 30 }}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => NavigationService.navigate('StrayPet')}
            >
                <Image
                    source={iconPets}
                    style={{ width: 30, height: 30 }}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => NavigationService.navigate('PetLost')}
            >
                <Image
                    source={iconGps}
                    style={{ width: 30, height: 30 }}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    Alert.alert("Poxa, volte logo! :( ", "Você realizou o logout e será redirecionado à tela de Login.", [{
                        onPress: () => NavigationService.navigate('Login')
                    }])
                }}
            >
                <Image
                    source={iconOut}
                    style={{ width: 30, height: 30 }}
                />
            </TouchableOpacity>
        </ View >
    )
};

export default Footer;