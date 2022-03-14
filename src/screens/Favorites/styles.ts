import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'
import {getStatusBarHeight} from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    marginTop: getStatusBarHeight()+20,
},
    header: {
        
      width: '100%',
      height: 130,
      backgroundColor: theme.colors.primary,
      
      flexDirection: 'column' ,
      display: 'flex',
      
  },
    
    titleSerie: {
      fontSize: 18,
      fontFamily: theme.fonts.title700,
      color: theme.colors.shape,
      marginBottom: 16,
    },
    title: {
      fontSize: 14,
      fontFamily: theme.fonts.text500,
      color: theme.colors.shape,
    },
    message: {
        fontFamily: theme.fonts.text500,
        color: theme.colors.shape,
    },
    persons: {
      flex: 1,
      marginTop: 1,
    },
    personsList: {
        fontFamily: theme.fonts.text500,
        color: theme.colors.shape,
    },

    titleSearchMyFavorytes: {
      fontFamily:  theme.fonts.title500,
      color: theme.colors.shape,
      fontSize: 15,

    },
    buttonSearchMyFavorytes: {
      width: '80%',
      height: 45,
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: '#BE3638',
      borderRadius: 5,
      padding: 5,
    },
    iconDiv: {
      width: 56,
      marginRight: 30,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      borderRightWidth: 1,
      borderColor: theme.colors.background_dark
  },
    toBack: {
      width: '7%',
      position: 'absolute',
      height: 25,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'transparent',
      borderRadius: 100,
      padding: 1,
      marginTop: 10,
      marginLeft: 5,
      
      

  },
  titleAlign: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  }

})