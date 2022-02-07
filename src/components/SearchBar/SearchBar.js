import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './SearchBar.style';

const SearchBar = props => {
  return (
    <View style={styles.container}>
      <TextInput onChangeText={props.onSearch} placeholder="Search..." />
    </View>
  );
};

export default SearchBar;
