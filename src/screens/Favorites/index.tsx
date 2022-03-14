import React, { useEffect, useState }   from 'react'
import { CardPersons } from '../../components/CardPersons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';




import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList, Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type RootStackParam = {
    DashBoard: string;
    navigate: any
  }


export function Favorites(){

    const navigation = useNavigation<RootStackParam>()

    function handleToBack() {
        navigation.navigate('DashBoard');    
    }

    const [dataz,useDataz] = useState([])

    useEffect(() => {
        showFavorite()
      }, [])

    async function showFavorite(){
        
        const dataKey: string = '@rickpersons';

        const data = await AsyncStorage.getItem(dataKey);
        const currentData = data ? JSON.parse(data) : [];
        
        useDataz(currentData)
        
        console.log(dataz, 'busca');
        
        }
    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                
                <RectButton style={styles.toBack} onPress={handleToBack}>
                    <MaterialIcons name="arrow-back" size={25} color="white" />
                </RectButton>    
            <View style={styles.titleAlign}>
            <Text style={styles.title}>
                Seus personagens favoritos do seriado de
            </Text>
            <Text style={styles.titleSerie}>
                Rick and Morty
            </Text>
            <RectButton style={styles.buttonSearchMyFavorytes} onPress={showFavorite}>
                <View style={styles.iconDiv}>
                    <MaterialIcons name="find-replace" size={25} color="white" />
                </View>
                <Text style={styles.titleSearchMyFavorytes}>Buscar meus favoritos </Text>
            </RectButton>
            </View>
            </View>
            
            <View style={styles.persons}>
                <FlatList
                 showsVerticalScrollIndicator={false}
                 
                  scrollEnabled={true}
                  contentContainerStyle= {{
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingBottom: 0
                  }}
                    data={dataz}
                    renderItem={({item}) => <CardPersons character={item} favoritado={true} key={Math.random().toString()} />}
                    numColumns={2}
                />
             </View>
        </View>
    )
}