import {StyleSheet} from 'react-native';
import React from 'react';
import { Color } from './Color';

const staticstyles = StyleSheet.create({
  greenbar: {
    width: '90%',
    height: 8,
    marginVertical: 35,
    marginHorizontal: '4%',
    borderRadius: 4,
    backgroundColor: Color.secondary,
    marginLeft:20
  },
  arrow: {
    width: 20,
    height: 20,
    marginTop: 25,
    resizeMode: 'contain',
    paddingLeft:50
  },
  fullscreen:{
    backgroundColor:Color.BackgroundColor
  }

});
export default staticstyles;