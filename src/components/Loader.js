import React, {PureComponent} from 'react';
import {ActivityIndicator} from 'react-native';
import {color} from 'theme';

export default class Loader extends PureComponent {
  render() {
    let {active} = this.props;

    return active ? (
      <ActivityIndicator size={'small'} color={color.palette.lightblack} />
    ) : null;
  }
}
