import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { styles } from './styles';

import NavigationService from '~/services/NavigationService';


const Buttons = (): JSX.Element => {


    return (
        <View style={styles.containerButtons}>
            <View>
                <TouchableOpacity
                    onPress={() => NavigationService.navigate('RegisterStrayPet')}
                    accessibilityLabel="Botão para registro de animais de rua"
                    style={styles.strayPetButton}
                >
                    <Text style={styles.textButton}>registrar animal abandonado</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => NavigationService.navigate('RegisterPetLost')}
                    accessibilityLabel="Botão para registro de animais que sumidos"
                    style={styles.petLostButton}
                >
                    <Text style={styles.textButton}>registrar animal perdido</Text>
                </TouchableOpacity>
            </View>
        </View>


    )
};

export default Buttons;