import React from 'react';

import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnPrimary: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#3179f6',
  },
  textWhite: {
    color: 'white',
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
      <TouchableOpacity style={styles.btnPrimary} onPress={onPressTakeImage}>
        <Text style={styles.textWhite}>Take Bubble Sheet Image</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BubbleSheetScreen;
