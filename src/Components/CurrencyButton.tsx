import React from 'react';
import type {PropsWithChildren} from 'react';
import {View, Text, StyleSheet} from 'react-native';

type currencyButtonProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;
const CurrencyButton = (props: currencyButtonProps): JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  flag: {
    fontSize: 28,
    color: '#ffffff',
    marginBottom: 4,
  },
  country: {
    fontSize: 14,
    color: '#2d3436',
    marginBottom: 4,
  },
});

export default CurrencyButton;
