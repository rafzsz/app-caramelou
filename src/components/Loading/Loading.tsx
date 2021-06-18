import React from 'react';
import { Text, View, StatusBar, ImageBackground, Image } from 'react-native';

import { styles } from './styles';

const Loading = (): JSX.Element => {
    const bgLoading = require('../../../assets/loading.png');

    return (
        <View style={styles.loadingContainer}>
            <ImageBackground source={bgLoading} style={styles.image}>
                <Text style={styles.textLoading}>Carregando...</Text>
                <Text> “A grandeza de uma nação pode ser julgada pelo
                    modo como seus animais são tratados.” </Text>
                <Text> - Mahatma Gandhi</Text>
            </ImageBackground>
            <StatusBar />
        </View>
    )
};

export default Loading;