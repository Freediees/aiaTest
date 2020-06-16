import React, {useState} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import DefaultHeader from '../../molecule/defaultHeader'

const MainScreen = ({label}) => {
  return (
    <View style={{ flex: 1}}>
      <View style={{ flex: 1}}>
      <DefaultHeader/>
      </View>
      <View style={{ flex: 9}}>
      <Text>{label}</Text>
      </View>
    </View>
  );
};

MainScreen.defaultProps = {
  label: 'Main Screen',
};

MainScreen.propTypes = {
  label: PropTypes.string,
};

export default MainScreen;
