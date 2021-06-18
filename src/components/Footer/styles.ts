import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerFooter: {
        width: '100%',
        height: 80,
        bottom: 0,
        backgroundColor: '#FEAE53',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        shadowOffset: { width: 0, height: -4 },
        shadowColor: 'black',
        shadowOpacity: 1.0,
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
});

