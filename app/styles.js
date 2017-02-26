import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#009688',
    },
    inputContainer: {
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        borderRadius: 4,
        backgroundColor: '#E0F2F1',
        padding: 5,
        marginBottom: 10,
        marginRight: 20,
        marginLeft: 20,
    },
    input: {
        alignSelf: 'stretch',
        height: 35,
        color: '#333',

    },
    button: {
        alignSelf: 'stretch',
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#80CBC4',
        marginRight: 20,
        marginLeft: 20,
    },
    buttonText: {
        color: '#FFFFFF'
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginBottom: 20
    },
});

export default styles;
