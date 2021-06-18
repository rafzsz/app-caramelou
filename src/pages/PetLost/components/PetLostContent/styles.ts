import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    contentsPetLost: {
        height: '100%',
        margin: 20,
    },
    imgLostBig: {
        width: 360,
        height: 230,
        borderRadius: 10,
        marginBottom: 10,
    },
    locationPet: {
        fontSize: 18,
        color: '#4f4f4f',
    },
    descriptionPet: {
        fontSize: 14,
        color: '#828282',
        marginBottom: 20,
    },
    containerLocation: {
        display: 'flex',
        flexDirection: 'row'
    },
    textName: {
        fontSize: 18,
        color: '#4f4f4f',
        paddingTop: 10,
    },
    typeAndDate: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10,
    },
    textType: {
        color: '#4f4f4f',
    },
    textDate: {
        color: '#4f4f4f',
    }


});