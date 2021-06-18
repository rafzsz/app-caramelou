import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';

import searchIcon from "~/assets/iconSearch.png";
import filterIcon from "~/assets/iconFilterMenu.png";

const SearchAreaStrayPet = (): JSX.Element => {
    function onPressSearchStrayPet() {

    }

    return (
        <View style={styles.contentsSearch}>
            <TouchableOpacity
                onPress={onPressSearchStrayPet}
                accessibilityLabel="Botão para pesquisa de animais de rua"
                style={styles.searchStrayPetButton}
            >
                <Image
                    source={searchIcon}
                    style={styles.searchImg}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={filterIcon}
                    style={styles.filterIcon}
                />
            </TouchableOpacity>
        </View>
    )
};

export default SearchAreaStrayPet;