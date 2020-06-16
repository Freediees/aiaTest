import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import PropTypes from 'prop-types';
import DefaultHeader from '../../molecule/defaultHeader';
import { responsiveWidth } from 'react-native-responsive-dimensions';

const MainScreen = ({label, headerTitle, data}) => {

  //console.log('hello' ,data)

  return (
    <View style={{ flex: 1}}>
      <View style={{ flex: 1}}>
        <DefaultHeader title={headerTitle}/>
      </View>
      <View style={{ flex: 9 }}>
        <ScrollView>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
        {
          data.map((a,i)=>{
            //console.log(a.media)
            return (
              <TouchableOpacity style={{ flexDirection: 'row'}} onPress={()=>{alert(a.title)}}>
                <Image source={{uri: a.media.m}} style={{width: responsiveWidth(50), aspectRatio: 1}} />
                {/* <Text style={{ marginTop: 8}}>{a.title}</Text> */}
              </TouchableOpacity>
            ) 
          })
        }
        </View>
       </ScrollView>
      </View> 

      <Modal visible={false}>
          <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
            <Text>Hello world</Text>
          </View>
        </Modal>   
    </View>
  );
};

MainScreen.defaultProps = {
  label: 'Main Screen',
  headerTitle: 'Header Title',
};

MainScreen.propTypes = {
  label: PropTypes.string,
  headerTitle: PropTypes.string,
};

export default MainScreen;
