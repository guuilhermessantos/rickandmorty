import { MaterialIcons } from '@expo/vector-icons';
import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';


import{ styles } from './styles';
import { Alert, Image, Text, View } from 'react-native';

type Props = {
  favoritado: boolean
  character: {
    id: number
    image: string
    name: string
    gender: string
    status: string
    species: string
  }
}


export function CardPersons({
    character,
    favoritado
} : Props) { 
  const [favorite, setFavorite] = useState(Boolean)

  

  useEffect(() => {
    if (favoritado === true){
      setFavorite(true)
    }

    
  }, [])

  async function AddFavorite(favoriteId: string){
    
    setFavorite(false)

    const newFavorite = {
      id:  character.id,
      image: character.image,
      name: character.name,
      gender: character.gender,
      status: character.status,
      species: character.species,

    }
    
    try { 
        
      const dataKey = '@rickpersons';

      const data = await AsyncStorage.getItem(dataKey);
          
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [
        ...currentData,
        newFavorite,
      ];
          
      const isAlreadyFavorite = dataFormatted.find(
        favorite => favorite.id === favoriteId,
      )
      
        

      if (isAlreadyFavorite) {
        setFavorite(true)
      }
      

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));
           

      } catch (error) {
        console.log(error);
        Alert.alert("Não foi possível salvar");
      }

      }

      async function removeFavorite(favoriteId: string){
        
        try { 
        
          const dataKey = '@rickpersons';

          const data = await AsyncStorage.getItem(dataKey);

          const currentData = data ? JSON.parse(data) : [];

          const newData = currentData.filter((favorite: { id: string; }) => favorite.id !== favoriteId)

          console.log('newData remove', newData)

          console.log('favoriteId', favoriteId)

          const isAlreadyFavorite = newData.find(
            (favorite: { id: string; }) => favorite.id === favoriteId,
          )
         

          if (!isAlreadyFavorite) {
            setFavorite(false)
          }
          
          await AsyncStorage.setItem(dataKey, JSON.stringify(newData));

        } catch (error) {
          console.log(error);
          Alert.alert("Não foi possível salvar");
        }
      }

    return(
        <View style={styles.container} >

            <View style={styles.header}>
                
                <Image style={styles.imgPersons}source={{uri:character.image}}  />
                
                <Text style={styles.personName}>
                    {character.name === 'unknown'
                        ? 'Não informado'
                        : character.name
                    }
                </Text>
            </View>

            
                <Text style={styles.infoPerson}>
                    Gênero: {character.gender === 'unknown'
                                ? 'Não informado'
                                : character.gender
                            }
                </Text>
                <Text style={styles.infoPerson}>
                    Status: {character.status === 'unknown'
                                ? 'Não informado'
                                : character.status
                            }
                </Text>
                <Text style={styles.infoPerson}>
                    Especie: {character.species === 'unknown'
                                ? 'Não informado'
                                : character.species
                            }
                </Text>
            {favorite ?
              <RectButton style={styles.button} onPress={ () =>  removeFavorite(character.id)}>
                <MaterialIcons name="favorite" size={15} color="white" />
                <Text style={styles.title}>Favoritado</Text>
              </RectButton>

              :
              
              <RectButton style={styles.button} onPress={ () =>  AddFavorite(character.id)}>
                <MaterialIcons name="favorite-border" size={15} color="white" />
                <Text style={styles.title}>Favorite</Text>
              </RectButton>

              
            }
              
            
            
            
        </View>
    )
}