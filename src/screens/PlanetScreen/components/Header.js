import React, {PureComponent} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {color} from 'theme';

export default class Header extends PureComponent {
  render() {
    let {headerImage, headerInnerImage, innerContainer} = styles;
    return (
      <ImageBackground
        style={headerImage}
        source={require('images/logo.jpeg')}
        resizeMode="cover"
        blurRadius={5}>
        <View style={innerContainer}>
          <ImageBackground
            source={require('images/logo.jpeg')}
            style={headerInnerImage}
            resizeMode="contain"
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: color.palette.white},
  headerInnerImage: {
    width: moderateScale(300),
    height: moderateScale(300),
    borderRadius: moderateScale(10),
    // padding: 10,
  },
  innerContainer: {alignSelf: 'center', alignItems: 'center'},
  headerImage: {
    elevation: 2, //works on android
    shadowColor: color.palette.lighterGrey,
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    width: '100%',
    height: moderateScale(300),
    justifyContent: 'center',
  },
});
