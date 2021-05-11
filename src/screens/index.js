import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Toast from 'react-native-toast-message';

import BubbleSheetAPI from '../common/api/bubble-sheet';
import {ToastStatus} from '../common/enum/toast.enum';

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
    marginVertical: 10,
  },
  textWhite: {
    color: 'white',
  },
});

function BubbleSheetScreen() {
  const [imageData, setImageData] = useState(null);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    if (imageData) {
      setScores([]);
      BubbleSheetAPI.scanBubbleSheet(imageData)
        .then(res => {
          if (res.length > 0) {
            setScores(res);
            Toast.show({
              text1: 'Success',
              text2: `${res.length} answers found.`,
              type: ToastStatus.Success,
            });
          } else {
            Toast.show({
              text1: 'Info',
              text2: `${res.length} answers found. Please check if it is correct bubble sheet.`,
              type: ToastStatus.Info,
            });
          }
        })
        .catch(error => {
          Toast.show({
            text1: 'Error',
            text2: 'Please check your internet connection.',
            type: ToastStatus.Error,
          });
          console.log('Error:', error);
        });
    }
  }, [imageData]);

  const onPressTakeImageFromCamera = () => {
    ImagePicker.openCamera({
      width: 800,
      height: 600,
      includeBase64: true,
      cropping: true,
    })
      .then(image => {
        setImageData(`data:${image.mime};base64,${image.data}`);
      })
      .catch(error => {
        Toast.show({
          text1: 'Error',
          text2: 'You have cancelled parsing bubble sheet.',
          type: ToastStatus.Error,
        });
      });
  };

  const onPressTakeImageFromLibrary = () => {
    ImagePicker.openPicker({
      width: 800,
      height: 600,
      includeBase64: true,
      cropping: true,
    })
      .then(image => {
        setImageData(`data:${image.mime};base64,${image.data}`);
      })
      .catch(error => {
        Toast.show({
          text1: 'Error',
          text2: 'You have cancelled parsing bubble sheet.',
          type: ToastStatus.Error,
        });
      });
  };

  return (
    <View style={styles.container}>
      <Text>{scores.join(', ')}</Text>
      <TouchableOpacity
        style={styles.btnPrimary}
        onPress={onPressTakeImageFromCamera}>
        <Text style={styles.textWhite}>
          Take Bubble Sheet Image from Camera
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnPrimary}
        onPress={onPressTakeImageFromLibrary}>
        <Text style={styles.textWhite}>
          Take Bubble Sheet Image from Library
        </Text>
      </TouchableOpacity>
      <Toast ref={ref => Toast.setRef(ref)} />
    </View>
  );
}

export default BubbleSheetScreen;
