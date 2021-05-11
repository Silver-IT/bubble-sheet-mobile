import React, {useState, useEffect} from 'react';

import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import BubbleSheetAPI from '../common/api/bubble-sheet';

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
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    if (imageData) {
      BubbleSheetAPI.scanBubbleSheet(imageData)
        .then(res => {
          console.log('Success:', res);
        })
        .catch(error => {
          console.log('Error:', error);
        });
    }
  }, [imageData]);

  const onPressTakeImage = () => {
    ImagePicker.openCamera({
      width: 800,
      height: 600,
      includeBase64: true,
      cropping: true,
    }).then(image => {
      setImageData(`data:${image.mime};base64,${image.data}`);
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
