import * as React from 'react';

import {Button, SafeAreaView, Text} from 'react-native';

function BubbleSheetScreen({}) {
  return (
    <SafeAreaView>
      <Text>Try to capture image using camera</Text>
      <Button title="Capture Bubble Sheet" />
    </SafeAreaView>
  );
}

export default BubbleSheetScreen;
