
import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'
import {getStatusBarHeight} from 'react-native-iphone-x-helper' // para modelos iphone x

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        marginTop: getStatusBarHeight()+30,
    },
    header: {
        width: '100%',
        height: 150,
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column' ,
        
    },
    titleSerie: {
        fontSize: 19,
        fontFamily: theme.fonts.title700,
        color: theme.colors.shape,
        marginBottom: 16,
    },

    title: {
        fontSize: 15,
        fontFamily:  theme.fonts.text500,
        color: theme.colors.shape,
    },
    persons: {
        flex: 1,
        marginTop: 1,
    },
    buttonSearch: {
        width: '15%',
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#BE3638',
        borderRadius: 4,
        marginLeft: 3,
    },
    viewSearchPersons: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    buttonMyFavorites:{
        position: 'absolute',
        width: 100,
        height: 50,
        padding: 10,
        backgroundColor: theme.colors.primary,
        borderRadius: 4,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 490,
        marginLeft: 260,
        paddingLeft: 10,
    },
    titleMyFavoritestitle: {
        fontFamily: theme.fonts.text500,
        color: theme.colors.shape,
        fontSize: 12,
        marginLeft: 5,
        textAlign: 'center'
    }
})