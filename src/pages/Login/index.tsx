import React, { useState } from 'react';
import {
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Text,
} from 'react-native';

import { styles } from './styles';

import icon from "../../../assets/icon.png";
import imgHeader from "~/assets/login-pets.png";
import checkboxCheck from '~/assets/checkbox-marked.png'

import NavigationService from '~/services/NavigationService';
import api from '~/services/api';


const Login = (): JSX.Element => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    // const signIn = async () => {
    //     const response = await api.post('/auth/authenticate', {
    //         login: login,
    //         password: password,
    //     });
    // };

    const dataUser = api.get('/user').then(response => response.data).then(console.log)

    return (
        <>
            <View style={styles.container}>
                <Image
                    source={imgHeader}
                    style={styles.imgHeader}
                >
                </Image>
                <View style={styles.contentsLogin}>
                    <View style={styles.login}>
                        <Image
                            source={icon}
                            style={styles.icon}
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
                                onPress={() => NavigationService.navigate('Home')}
                            // onPress={singIn}
                            >
                                <Text style={styles.buttonLogin}>Entrar</Text>
                            </TouchableOpacity>
                            <View style={styles.bottomForm}>
                                <View style={styles.keepLoggedContainer}>
                                    <Image
                                        source={checkboxCheck}
                                    />
                                    <Text style={styles.keepLogged}> Manter logado</Text>
                                </View>
                                <TouchableOpacity
                                    accessibilityLabel="Botão caso tenha esquecido sua senha"
                                    onPress={() => NavigationService.navigate('ForgotPassword')}
                                >
                                    <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View
                            style={styles.hr}
                        />
                        <View style={styles.registerView}>
                            <Text style={styles.registerText}>Não possui cadastro?</Text>
                            <TouchableOpacity
                                accessibilityLabel="Criar cadastro"
                                onPress={() => NavigationService.navigate('RegisterUser')}
                            >
                                <Text style={styles.buttonRegister}>cadastrar</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </View>
        </>
    )
};

export default Login;