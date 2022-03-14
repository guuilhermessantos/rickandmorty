import { MaterialIcons } from '@expo/vector-icons'
import React, {  ChangeEvent, useCallback, useEffect, useState }   from 'react'
import { FlatList, Text, TextInputProps, View } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { CardPersons } from '../../components/CardPersons'
import { SearchInputPersons } from '../../components/SearchInputPersons'
import api from '../../services/api'
import { styles } from './styles';



  type Props = TextInputProps & RectButtonProps;
  
 type RootStackParam = {
  Favorites: string;
  navigate: any
}

type IPersons = {
  id: string,
  image: string,
  name: string,
  gender: string,
  status: string,
  species: string,
}

export function DashBoard({...rest}: Props){

    const [persons,setPersons] = useState<IPersons[]>([])
    const [page,setPage] = useState(1)
    const [searchPerson,setSearchPerson] = useState('')
    const [text, setText] = useState('')
    
    useEffect(() => {
      api.get(`/character/?page=${page}`,{ 
        params: {name: searchPerson }
      }).then((response) => {
        
        setPersons(item => [...item , ...response.data.results]);
        
      })
    }, [page])
    
    useEffect(() => {
      api.get(`/character/?name=${searchPerson}`).then((response) => {
    
        setPersons(response.data.results);
    
      })
    }, [searchPerson])

      function nextPersons() {
          setPage(page+1)
      }

      function searchFind() {
        setSearchPerson(text)
    }
    const navigation = useNavigation<RootStackParam>()

    function handleSignIn() {
    navigation.navigate('Favorites');    
    }
    

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}> Encontre o seu personagem do seriado de</Text>
                <Text style={styles.titleSerie}> Rick and Morty </Text>
            
                <View style={styles.viewSearchPersons}>
                  <SearchInputPersons onChangeText={setText}  />
                  <RectButton  style={styles.buttonSearch} onPress={searchFind}>
                    <MaterialIcons name="find-replace" size={25} color="white" />
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
                    data={persons}
                    renderItem={({item}) => <CardPersons character={item} favoritado={false} key={Math.random().toString()}  />}
                    numColumns={2}
                    onEndReached={nextPersons}
                    onEndReachedThreshold={0.3}
                />
                <RectButton  style={styles.buttonMyFavorites} onPress={handleSignIn}>
                  <MaterialIcons name="favorite" size={20} color="white" />
                    <Text  style={styles.titleMyFavoritestitle}>
                      Meus {'\n'}
                      Favoritos
                    </Text>
                </RectButton>
             </View>
        </View>
    )
}