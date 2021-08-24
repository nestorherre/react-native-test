import { StyleSheet } from 'react-native';

export const colors = {
    primary: '#D1E8E2',
    secondary: '#707070',
    tertiary: '#F2ECE5',
    quaternary: '#E2ECEE'
}

export const globalStyles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1
    },
    headerText: {
        fontSize: 30,
        fontWeight: '900',
        color: colors.secondary,
        marginHorizontal: 15,
        marginBottom: 20,
        textTransform: 'capitalize',
    }
});