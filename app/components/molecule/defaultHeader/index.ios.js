import React from "react";
import { View, Text, TextInput } from "react-native";
import PropTypes from "prop-types";
import styles from "./style";

const DefaultHeader = ({
  title,
  search,
  onSubmit,
  onChangeSearch,
  onEnter,
  value,
}) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16, marginBottom: 8 }}>{title}</Text>
      {search ? (
        <TextInput
          value={value}
          placeholder={"Looking for something ?"}
          style={{ marginBottom: 8, marginTop: 8 }}
          onChangeText={(text) => onChangeSearch(text)}
          onSubmitEditing={onEnter.bind(this)}
        />
      ) : (
        <View />
      )}
    </View>
  );
};

DefaultHeader.defaultProps = {
  title: "Title",
  search: false,
};

DefaultHeader.propTypes = {
  title: PropTypes.string,
  search: PropTypes.bool,
};
export default DefaultHeader;
