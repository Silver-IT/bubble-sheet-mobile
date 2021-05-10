import React from 'react';

import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function BubbleSheetScreen() {
  const onPressTakeImage = () => {
    ImagePicker.openCamera({
      width: 400,
      height: 400,
      includeBase64: true,
      cropping: true,
    }).then(image => {
      console.log(image);
      console.log(`data:${image.mime};base64,${image.data}`);
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressTakeImage}>
        <Text>Take Image</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BubbleSheetScreen;
