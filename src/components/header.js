import React from 'react';
import { Text, View } from 'react-native';

const Header = (Props) => {
  const { textStyle, ViewStyle } = styles;


  return (
    <View style={ViewStyle}>
      <Text style={textStyle}> {Props.userName}</Text>
    </View>
  );
};

const styles = {
  ViewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

export default Header;
