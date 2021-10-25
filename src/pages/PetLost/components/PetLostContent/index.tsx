import React, { useEffect, useState } from 'react'
import { View, Image, Text } from 'react-native';

import { styles } from './styles';

import lostBig1 from "~/assets/lostBig1.png";
import lostBig2 from "~/assets/lostBig2.png";
import pinMap from "~/assets/iconPinMap.png";
import api from '~/services/api';

const PetLostContent = (): JSX.Element => {
    const [pets, setPets] = useState([])

    useEffect(() => {
        const dataPet = async () => await api.get('/lostPet').then(response => response.data)
        setPets(dataPet.arguments)

    }, [])

    // pets.map(pet => {
    //     console.log(pet.name);

    //     return pet;
    // });
    return (
        <View style={styles.contentsPetLost}>
            {/* {
                pets.map(pet => {
                    console.log(pet.name);

                    return pet;
                })
            } */}
            <Image
                source={lostBig1}
                style={styles.imgLostBig}
            />
            <View style={styles.containerLocation} >
                <Image source={pinMap} />
                <Text style={styles.locationPet}>
                    {/* {dataPet} */}
                </Text>
            </View>
        </View>
    )
};

export default PetLostContent;