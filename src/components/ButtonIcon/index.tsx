import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'
import {
    Text,
    View,
} from 'react-native';

import { styles } from './styles';

type Props = RectButtonProps & {
    title: string;
}

export function ButtonIcon({ title, ...rest }: Props){
    return(
    <RectButton style={styles.container} {...rest} >
        <View style={styles.iconWrapper}>
            <MaterialIcons name="login" size={25} color="white" />
        </View>

        <Text style={styles.title}> { title } </Text>
    </RectButton>
    )
}