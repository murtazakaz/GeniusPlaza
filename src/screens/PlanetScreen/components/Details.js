import React, {PureComponent} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {color} from 'theme';
import {ScrollView} from 'react-native-gesture-handler';

export default class Details extends PureComponent {
  render() {
    let {planet} = this.props;
    let {
      detailContainer,
      detailInfoContainer,
      detailInfoKey,
      detailInfoValue,
      InfoKey,
      InfoValue,
    } = styles;
    return (
      <ScrollView>
        <View style={detailContainer}>
          <View style={detailInfoContainer}>
            <View style={detailInfoKey}>
              <Text style={InfoKey}>Name</Text>
            </View>

            <View style={detailInfoValue}>
              <Text style={InfoValue}>{planet.name}</Text>
            </View>
          </View>

          <View style={detailInfoContainer}>
            <View style={detailInfoKey}>
              <Text style={InfoKey}>Rotation Period</Text>
            </View>

            <View style={detailInfoValue}>
              <Text style={InfoValue}>{planet.rotation_period}</Text>
            </View>
          </View>

          <View style={detailInfoContainer}>
            <View style={detailInfoKey}>
              <Text style={InfoKey}>Orbital Period</Text>
            </View>

            <View style={detailInfoValue}>
              <Text style={InfoValue}>{planet.orbital_period}</Text>
            </View>
          </View>

          <View style={detailInfoContainer}>
            <View style={detailInfoKey}>
              <Text style={InfoKey}>Climate</Text>
            </View>

            <View style={detailInfoValue}>
              <Text style={InfoValue}>{planet.climate}</Text>
            </View>
          </View>

          <View style={detailInfoContainer}>
            <View style={detailInfoKey}>
              <Text style={InfoKey}>Gravity</Text>
            </View>

            <View style={detailInfoValue}>
              <Text style={InfoValue}>{planet.gravity}</Text>
            </View>
          </View>

          <View style={detailInfoContainer}>
            <View style={detailInfoKey}>
              <Text style={InfoKey}>Population</Text>
            </View>

            <View style={detailInfoValue}>
              <Text style={InfoValue}>{planet.population}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  detailContainer: {},
  detailInfoContainer: {
    backgroundColor: color.palette.white,
    flexDirection: 'row',
    marginHorizontal: moderateScale(10),
    marginVertical: moderateScale(5),
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(5),
    paddingVertical: moderateScale(15),
    elevation: 2, //works on android
    shadowColor: color.palette.lighterGrey,
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  detailInfoKey: {flex: 0.4},
  InfoKey: {fontSize: moderateScale(12), color: color.palette.lightblack},
  detailInfoValue: {flex: 0.6},
  InfoValue: {fontSize: moderateScale(12), color: color.palette.black},
});
