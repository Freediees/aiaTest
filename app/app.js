import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import MainScreen from './components/organism/mainScreen';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    async function initialize() {
      console.log('hello')
      axios
        .get(
          'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true',
        )
        .then((response) => {
          console.log(response.data.items);
        })
        .catch((err) => {
          //console.log(err);
        });
    }
    initialize();
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <MainScreen />
    </View>
  );
};

export default App;
