import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const Header = (): JSX.Element => {
  const iconUser = require('../../../../assets/iconUser.png')

  return (
    <View style={styles.containerHeader}>
      <Text style={styles.helloName}> Olá Julia, </Text>
      <TouchableOpacity
        accessibilityLabel="Botão para perfil do usuário"
      >
        <Image
          source={iconUser}
          style={styles.iconUser}
        />
      </TouchableOpacity>
    </View>


  )
};

export default Header;