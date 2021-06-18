import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

import logo from "~/assets/logo.png";
import back from "~/assets/chevron-left.png";
import imgHeader from "~/assets/login-pets.png";

import NavigationService from '~/services/NavigationService';

const ForgotPassword = (): JSX.Element => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Image
                source={imgHeader}
                style={styles.imgHeader}
            >
            </Image>
            <View style={styles.contentsLogin}>
                <View style={styles.login}>
                    <Image
                        source={logo}
                        style={styles.logo}
                    />
                    <View style={styles.form}>
                        <Text style={styles.labelText}>Digite seu e-mail</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Ex.: seuemail@email.com'
                            onChangeText={login => setLogin(login)}
                            defaultValue={login}
                        />
                        <TouchableOpacity
                            accessibilityLabel="Botão para anexar foto do animal perdido"
                        >
                            <Text style={styles.buttonLogin}>Recuperar Senha</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={styles.divBack}
                        accessibilityLabel="Botão para voltar a tela de login"
                        onPress={() => NavigationService.navigate('Login')}
                    >
                        <Image
                            source={back}
                        />
                        <Text style={styles.backText}>voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

export default ForgotPassword;