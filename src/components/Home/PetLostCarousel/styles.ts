import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerPetLost: {
        width: '100%',
    },
    petLostHeaderHome: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 15,
    },
    titlePetHome: {
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'Montserrat-Regular',
    },
    seeMore: {
        color: '#CE4A00',
        fontWeight: 'bold',
        fontFamily: 'Montserrat-Regular',
    },
    petLost: {
        width: 120,
        height: 130,
        borderRadius: 10,
        margin: 10,
    },
    carrousselPetLost: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

