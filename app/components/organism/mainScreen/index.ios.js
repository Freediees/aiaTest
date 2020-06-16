import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  Modal,
} from "react-native";
import PropTypes from "prop-types";
import DefaultHeader from "../../molecule/defaultHeader";
import ImageModal from "../../molecule/imageModal";
import { responsiveWidth } from "react-native-responsive-dimensions";

const MainScreen = ({
  label,
  headerTitle,
  data,
  onRefresh,
  onChangeSearch,
  onSubmit,
  value,
}) => {
  //console.log('hello' ,data)

  const toggleVisible = () => {
    setVisible(!visible);
  };
  const [visible, setVisible] = useState(false);
  const [urlModal, setUrlModal] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1.5 }}>
        <DefaultHeader
          value={value}
          title={headerTitle}
          search
          onSubmit={onRefresh}
          onChangeSearch={onChangeSearch}
          onEnter={onSubmit}
        />
      </View>
      <View style={{ flex: 9 }}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={onRefresh.bind(this)}
            />
          }
        >
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {data.map((a, i) => {
              //console.log(a.media)
              return (
                <TouchableOpacity
                  style={{ flexDirection: "row" }}
                  onPress={() => {
                    toggleVisible();
                    setUrlModal(a.link);
                  }}
                >
                  <Image
                    source={{ uri: a.media.m }}
                    style={{ width: responsiveWidth(50), aspectRatio: 1 }}
                  />
                  {/* <Text style={{ marginTop: 8}}>{a.title}</Text> */}
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>

      <ImageModal
        visible={visible}
        urlModal={urlModal}
        onClose={toggleVisible}
      />
    </View>
  );
};

MainScreen.defaultProps = {
  label: "Main Screen",
  headerTitle: "Header Title",
};

MainScreen.propTypes = {
  label: PropTypes.string,
  headerTitle: PropTypes.string,
};

export default MainScreen;
