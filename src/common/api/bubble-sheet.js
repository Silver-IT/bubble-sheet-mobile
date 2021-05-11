import {BaseAPIURL} from '../constants/general';

const BubbleSheetAPI = {
  scanBubbleSheet: async imageData => {
    const url = `${BaseAPIURL}/bubble-sheet/scan`;
    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({imageData}),
      });
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  },
};

export default BubbleSheetAPI;
