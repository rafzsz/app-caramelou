import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { styles } from './styles';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../screens/RootStackPrams';
import { StackScreenProps } from '@react-navigation/stack';

import StrayPet from '../../StrayPet/StrayPet';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

//{ navigation }: Props

const Buttons = (): JSX.Element => {


    return (
        <View style={styles.containerButtons}>
            <View>
                <TouchableOpacity
                    // onPress={() => navigation.navigate('Home')}
                    accessibilityLabel="Botão para registro de animais de rua"
                    style={styles.strayPetButton}
                >
                    <Text style={styles.textButton}>registrar animal abandonado</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
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