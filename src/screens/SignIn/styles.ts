import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width: '100%',
        height: 450,
    },
    content:{
        marginTop: -125,
        paddingHorizontal: 50,
    },
    title:{
        color: theme.colors.shape,
        textAlign: 'center',
        fontSize: 40,
        fontFamily: theme.fonts.title700,
        lineHeight: 40,
    },
    subtitle:{
        color: theme.colors.shape,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 20,
        fontFamily: theme.fonts.title500,
        lineHeight: 25,
    }
})