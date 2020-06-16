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

export default function ImageModal({ visible, onClose, urlModal }) {
  return (
    <Modal
      animationType="fade" // fade
      visible={visible}
      transparent={true}
    >
      <View
        style={{
          backgroundColor: "rgba(0,0,0,0.8)",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: responsiveWidth(90),
            height: responsiveHeight(80),
            alignSelf: "center",
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
          }}
        >
          <View style={{ width: "100%", flex: 1 }}>
            <View style={{ flex: 1 }}>
              <WebView source={{ uri: urlModal }} />
            </View>
            <View
              style={{
                padding: 16,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={onClose.bind(this)}>
                <Text>Close</Text>
              </TouchableOpacity>
            </View>
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
