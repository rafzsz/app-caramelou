import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'baseline',
        bottom: 0,
        position: 'absolute',
    },
    contentsLogin: {
        width: '100%',
        zIndex: 2,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        padding: 25,
        backgroundColor: '#333',
        height: 500,
        bottom: 0,
    },
    login: {
        alignItems: 'center',
        height: 600
    },
    logo: {
        position: 'absolute',
        top: -100,
    },
    input: {
        width: 250,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 50,
        marginVertical: 20,
        paddingHorizontal: 20,
    },
    buttonLogin: {
        width: 250,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#FEAE53',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    },
    form: {
        marginTop: 120,
    },
    buttonRegister: {
        fontWeight: 'bold',
        color: '#FEAE53',
        fontSize: 18,
        textAlign: 'left',
        paddingHorizontal: 10,
    },
    labelText: {
        color: '#f2f2f2',
        fontSize: 18
    },
    divBack: {
        flexDirection: 'row',
        paddingTop: 50,
        alignItems: 'center',
    },
    backText: {
        color: '#bdbdbd',
        fontSize: 18,
    },
    imgHeader: {
        zIndex: 1,
        width: "100%",
        display: 'flex',
        marginHorizontal: 'auto',
        marginVertical: 0,
        alignItems: 'center',
        justifyContent: 'center',
        top: 150,
    },
});

