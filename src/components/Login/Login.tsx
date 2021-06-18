import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import HeaderLogin from './HeaderLogin/HeaderLogin';

import { styles } from './styles';

const Login = (): JSX.Element => {
    const logo = require('../../../assets/logo.png')

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
                        <TextInput
                            style={styles.input}
                            placeholder='seu login'
                            onChangeText={login => setLogin(login)}
                            defaultValue={login}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='sua senha'
                            onChangeText={password => setPassword(password)}
                            defaultValue={password}
                        />
                        <TouchableOpacity
                            accessibilityLabel="Botão para anexar foto do animal perdido"
                        >
                            <Text style={styles.buttonLogin}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            borderBottomColor: '#828282',
                            borderBottomWidth: 2,
                            width: 362,
                            paddingTop: 60,
                        }}
                    />
                    <View style={styles.registerView}>
                        <Text style={styles.registerText}>Não possui cadastro?</Text>
                        <TouchableOpacity
                            accessibilityLabel="Criar cadastro"
                        >
                            <Text style={styles.buttonRegister}>cadastrar</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </View>
    )
};

export default Login;