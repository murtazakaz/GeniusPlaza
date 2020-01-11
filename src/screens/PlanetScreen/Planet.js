import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {color} from 'theme';
import {_getPlanets} from '../../services/StarWarsServices';
import Loader from 'components/Loader';

export default class Planet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planet: {},
      loading: false,
    };
  }

  componentDidMount() {
    const route = this.props.navigation.getParam('route');

    this.getPlanetInfo(route);
  }

  async getPlanetInfo(route) {
    this.setState({loading: true});
    let response = await _getPlanets(route);
    this.setState({loading: false});
    if (!response) {
      //something went wrong or no internet
    } else {
      console.log('details', response);
      this.setState({planet: response});
    }
  }

  renderHeader() {
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

  renderDetails() {
    let {planet} = this.state;
    let {
      detailContainer,
      detailInfoContainer,
      detailInfoKey,
      detailInfoValue,
      InfoKey,
      InfoValue,
    } = styles;
    return (
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
    );
  }

  render() {
    let {loading} = this.state;
    let {container} = styles;
    return (
      <View container>
        {this.renderHeader()}
        {loading ? <Loader active={loading} /> : this.renderDetails()}
      </View>
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
