import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import MainScreen from "./components/organism/mainScreen";
import axios from "axios";

const App = ({ data }) => {
  const [listData, setListData] = useState([]);

  async function initialize() {
    axios
      .get(
        "https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true"
      )
      .then((response) => {
        console.log(response.data.items);
        setListData(response.data.items);
      })
      .catch((err) => {
        //console.log(err);
      });
  }

  useEffect(() => {
    initialize();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MainScreen data={listData} onRefresh={initialize} />
    </View>
  );
};

App.defaultProps = {
  data: [],
};

App.propTypes = {
  data: PropTypes.array,
};

export default App;
