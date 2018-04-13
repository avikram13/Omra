import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {

state = { Omra: [] };

componentWillMount() {
  console.log('Testing Angesh');
   axios.get('https://rallycoding.herokuapp.com/api/music_Omra')
   .then((response) => {
     console.log(response);
     this.setState({ Omra: response.data });
   }).catch((error) => {
                console.log(error);
    });
}

renderOmra() {
  console.log('inRender');
  return this.state.Omra.map(album => <Text> {album.title} </Text>);
}

  render() {
    console.log('state');
    return (
      <View>
        {this.renderOmra()}
        </View>
    );
  }
}

export default AlbumList;
