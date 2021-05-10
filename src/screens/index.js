import React, {useState} from 'react';

import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

function BubbleSheetScreen() {
  const onPressTakeImage = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      includeBase64: true,
      cropping: true,
    }).then(image => {
      console.log(image);
      console.log(`data:image/png;base64,${image.data}`);
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressTakeImage}>
        <Text style={{fontSize: 14}}> Take Image </Text>
      </TouchableOpacity>
    </View>
  );
}

export default BubbleSheetScreen;
