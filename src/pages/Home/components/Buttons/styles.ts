import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerButtons: {
        flexDirection: 'column',
        marginBottom: 15,
        marginTop: 15,
    },
    strayPetButton: {
        backgroundColor: '#FEAE53',
        borderRadius: 50,
        padding: 15,
        margin: 10,
    },
    petLostButton: {
        backgroundColor: 'transparent',
        borderRadius: 50,
        borderStyle: 'solid',
        borderColor: '#CE4A00',
        borderWidth: 2,
        padding: 15,
        margin: 10,
    },
    textButton: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#CE4A00',
        fontSize: 18,
        fontFamily: 'Montserrat_400Regular',
    }

});

