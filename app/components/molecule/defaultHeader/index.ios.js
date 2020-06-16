import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

const DefaultHeader = ({ title }) => {
    return(
        <View style={ styles.container } >
            <Text style={{ fontSize: 16}}>{title}</Text>
        </View>
    )
}

DefaultHeader.defaultProps = {
    title: 'Title',
}

DefaultHeader.propTypes = {
    title: PropTypes.string,
}
export default DefaultHeader