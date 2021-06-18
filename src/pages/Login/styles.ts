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
    },
    logo: {
        position: 'absolute',
        top: -100,
    },
    input: {
        width: 300,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 50,
        marginVertical: 20,
        paddingHorizontal: 20,
    },
    buttonLogin: {
        width: 300,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#FEAE53',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    },
    form: {
        marginTop: 100,
    },
    hr: {
        borderBottomColor: '#828282',
        borderBottomWidth: 2,
        width: 362,
        paddingTop: 40,
    },
    registerText: {
        color: '#e0e0e0',
        fontSize: 18,
        textAlign: 'left',
    },
    buttonRegister: {
        fontWeight: 'bold',
        color: '#FEAE53',
        fontSize: 18,
        textAlign: 'left',
        paddingHorizontal: 10,
    },
    registerView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 25,
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
    forgotPassword: {
        color: '#FEAE53',
        fontSize: 12,
        textAlign: 'right',

    },
    bottomForm: {
        display: 'flex',
        flexDirection: 'row',
        width: 300,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 5,
    },
    keepLoggedContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    keepLogged: {
        color: '#BDBDBD',
        fontSize: 12,
    }
});

