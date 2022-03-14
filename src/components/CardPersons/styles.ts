import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
      width: 150,
      borderRadius: 6,
      paddingBottom: 10,
      marginTop: 5,
      marginLeft: 5,
      marginRight: 5,
      alignItems: 'center',
      backgroundColor:  theme.colors.background_dark,
    },
    header: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    personName: {
      fontFamily:  theme.fonts.title700,
      color: theme.colors.shape,
      textAlign: 'center',
      fontSize: 16,
      marginTop: 5,
    },

    infoPerson: {
      fontFamily: theme.fonts.text400,
      fontSize: 11,
      color: theme.colors.shape,
      textAlign: 'center',
    },
    imgPersons: {
    
      padding: 70 ,
      borderRadius: 5,
      marginTop: 10,
    },
    title: {
      fontFamily: theme.fonts.text500,
      color: theme.colors.shape,
      fontSize: 10,
      
    },
    button: {
      marginTop: 5,
      width: '55%',
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#BE3638',
      borderRadius: 5,
      padding: 7,
    },
    
})