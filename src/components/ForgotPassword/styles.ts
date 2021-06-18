import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        height: 600,
        flex: 1,
    },
    contentsLogin: {
        borderRadius: 25,
        padding: 25,
        marginTop: 280,
        backgroundColor: '#333',
        height: 600,
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
    }
});

