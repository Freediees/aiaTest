import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  Image,
} from "react-native";
import PropTypes from "prop-types";
import {
  responsiveWidth,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import { WebView } from "react-native-webview";
import DefaultHeader from "../../molecule/defaultHeader";

export default function ImageModal({ visible, onClose, urlModal }) {
  return (
    <Modal
      animationType="slide" // fade
      visible={visible}
      transparent={true}
    >
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ width: "100%", flex: 1 }}>
          <View
            style={{
              flex: 1,
              padding: 16,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={onClose.bind(this)}>
              <DefaultHeader title={"Close"} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 9 }}>
            <WebView source={{ uri: urlModal }} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

ImageModal.defaultProps = {
  visible: true,
  onClose: () => {},
};

ImageModal.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};
