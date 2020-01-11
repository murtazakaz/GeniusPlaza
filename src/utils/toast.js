import {Platform} from 'react-native';
import {ToastAndroid} from 'react-native';
import Toast from 'react-native-tiny-toast';
// import Toast from 'react-native-root-toast';

export const showToast = msg => {
  if (Platform.OS === 'ios') {
    Toast.show(msg);
  } else {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  }
};
