import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {color} from 'theme';
import {_getPlanets} from '../../services/StarWarsServices';
import Loader from 'components/Loader';
import Header from 'planetsComponents/Header';
import Details from 'planetsComponents/Details';

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
      this.setState({planet: response});
    }
  }

  render() {
    let {loading, planet} = this.state;
    let {container} = styles;
    return (
      <View style={container}>
        <Header />
        {loading ? <Loader active={loading} /> : <Details planet={planet} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: color.palette.white},
});
