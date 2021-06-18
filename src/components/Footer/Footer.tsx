import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Home from '../Home/Home';

import { styles } from './styles';

const Footer = (): JSX.Element => {
    const iconHome = require('../../../assets/iconHome.png');
    const iconPet = require('../../../assets/iconPets.png');
    const iconGps = require('../../../assets/iconGps.png');
    const iconMenu = require('../../../assets/iconMenu.png');

    function onPressFooter() {

    }

    return (
        <View style={styles.containerFooter}>
            <TouchableOpacity

            // onPress={  }
            >
                <Image
                    source={iconHome}
                    style={{ width: 30, height: 30 }}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={iconPet}
                    style={{ width: 30, height: 30 }}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={iconGps}
                    style={{ width: 30, height: 30 }}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={iconMenu}
                    style={{ width: 30, height: 30 }}
                />
            </TouchableOpacity>
        </ View >
    )
};

export default Footer;