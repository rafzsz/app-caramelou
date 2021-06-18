import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerStrayPet: {
        width: '100%',
    },
    strayPetHeaderHome: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 15,
    },
    titlePetHome: {
        fontSize: 22,
        fontFamily: 'Montserrat_400Regular',
        fontWeight: 'bold',
    },
    seeMore: {
        color: '#CE4A00',
        fontWeight: 'bold',
    },
    strayPet: {
        width: 120,
        height: 130,
        borderRadius: 10,
        margin: 10,
    },
    carrousselStrayPet: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

