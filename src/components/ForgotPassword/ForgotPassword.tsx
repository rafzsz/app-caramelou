import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import HeaderLogin from '../Login/HeaderLogin/HeaderLogin';

import { styles } from './styles';

const ForgotPassword = (): JSX.Element => {
    const logo = require('../../../assets/logo.png')
    const back = require('../../../assets/chevron-left.png')

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <HeaderLogin />
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
                            <Text style={styles.buttonLogin}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.divBack}>
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