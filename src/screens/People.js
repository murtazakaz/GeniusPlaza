import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet, Image} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {_getPeople} from '../services/StarWarsServices';
import {color} from 'theme';
export default class People extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      peopleList: [],
    };
  }

  componentDidMount() {
    this.getPeople(1);
  }

  async getPeople(id) {
    let response = await _getPeople(id);
    if (!response) {
      //something went wrong or no internet
    } else {
      this.setState({data: response, peopleList: response.results});
    }
  }

  renderPeopleItems = ({item, index}) => {
    let {itemContainer, avatarCol, avatar, detailCol} = styles;
    return (
      <View style={itemContainer}>
        <View style={avatarCol}>
          <Image source={require('images/logo.jpeg')} style={avatar} />
        </View>
        <View style={detailCol}>
          <Text>{item.name}</Text>
          <Text>{item.gender}</Text>
          <Text>{item.birth_year}</Text>
        </View>
      </View>
    );
  };

  renderPeopleFlatlist() {
    let {peopleList} = this.state;
    return <FlatList data={peopleList} renderItem={this.renderPeopleItems} />;
  }

  render() {
    let {container} = styles;
    return (
      <View style={container}>
        <Text> People </Text>
        {this.renderPeopleFlatlist()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: color.palette.white},
  itemContainer: {
    backgroundColor: color.palette.white,
    flexDirection: 'row',
    marginHorizontal: moderateScale(10),
    marginVertical: moderateScale(5),
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(5),
    paddingVertical: moderateScale(5),
    elevation: 2, //works on android
    shadowColor: color.palette.lighterGrey,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  avatarCol: {flex: 0.3},
  avatar: {
    width: moderateScale(100),
    height: moderateScale(80),
    borderRadius: moderateScale(10),
  },
  detailCol: {flex: 0.6},
});
