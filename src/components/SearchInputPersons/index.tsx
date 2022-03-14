import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import {
 styles,
} from './styles';

type Props = TextInputProps;

export function SearchInputPersons({...rest} : Props){
  return(
  <TextInput style={styles.searchInput} {...rest}   />
  );
}