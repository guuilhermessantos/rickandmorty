import React, { useState } from 'react';
import {
    View,
    Text, 
    Image,
} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'

import { styles } from './styles'

 type RootStackParam = {
    DashBoard: string;
    navigate: any
}

export function SignIn(){
    
const navigation = useNavigation<RootStackParam>()

function handleSignIn() {
    navigation.navigate('DashBoard');    
    }

  return(
    <View style={styles.container}> 
        

        <Image
            source={IllustrationImg}
            style={styles.image}
            resizeMode='stretch'
        />

        <View style={styles.content}>
            <Text style={styles.title}>
                Encontre {'\n'}
                Os seus Personagens {'\n'}
                Favoritos {'\n'}
            </Text>

            <Text style={styles.subtitle}>
                Entre no mundo de Rick and Morty.
            </Text>
            <ButtonIcon title='Entre e explore'  onPress={handleSignIn}/>
        </View>
    </View>
  )
}