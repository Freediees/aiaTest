import React, {useState} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

const MainScreen = ({label}) => {
  return (
    <View>
      <Text>{label}</Text>
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
