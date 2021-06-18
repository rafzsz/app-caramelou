import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';

const SearchAreaPetLost = (): JSX.Element => {
    const searchIcon = require('../../../../assets/iconSearch.png')
    const filterIcon = require('../../../../assets/iconFilterMenu.png')

    function onPressSearchPetLost() {

    }

    return (
        <View style={styles.contentsSearch}>
            <TouchableOpacity
                onPress={onPressSearchPetLost}
                accessibilityLabel="Botão para pesquisa de animais de rua"
                style={styles.searchLostPetButton}
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

export default SearchAreaPetLost;