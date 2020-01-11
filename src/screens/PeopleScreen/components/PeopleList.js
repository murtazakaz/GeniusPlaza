import React, {Component, PureComponent} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {withNavigation} from 'react-navigation';
import {color} from 'theme';
import {showToast} from '../../../utils/toast';

class PeopleList extends PureComponent {
  handleLoadMore = () => {
    this.props.loadMore();
  };

  getFilmDetails(item) {
    if (!item.homeworld) {
      showToast('No Planet info to display');
      return null;
    }

    this.props.navigation.navigate('Planet', {route: item.homeworld});
  }

  renderPlanetButton(item) {
    let {button, buttonLabel} = styles;

    return (
      <TouchableOpacity
        style={button}
        onPress={() => this.getFilmDetails(item)}>
        <Text style={buttonLabel}>Planet</Text>
      </TouchableOpacity>
    );
  }

  renderPeopleItems = ({item, index}) => {
    let {
      itemContainer,
      avatarCol,
      avatar,
      detailCol,
      title,
      subTitle,
      button,
      buttonLabel,
    } = styles;

    return (
      <View style={itemContainer}>
        <View style={avatarCol}>
          <Image source={require('images/logo.jpeg')} style={avatar} />
        </View>
        <View style={detailCol}>
          <Text style={title}>{item.name}</Text>
          <Text style={subTitle}>Gender: {item.gender}</Text>
          <Text style={subTitle}>Height: {item.height}</Text>
          <Text style={subTitle}>DOB: {item.birth_year}</Text>
          {this.renderPlanetButton(item)}
        </View>
      </View>
    );
  };

  render() {
    let {data} = this.props;
    return (
      <FlatList
        data={data}
        renderItem={this.renderPeopleItems}
        keyExtractor={(item, index) => index.toString()}
        removeClippedSubviews={true}
        initialNumToRender={10}
        onEndReachedThreshold={0.01}
        onEndReached={this.handleLoadMore}
      />
    );
  }
}

export default withNavigation(PeopleList);

const styles = StyleSheet.create({
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
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  avatarCol: {flex: 0.4},
  avatar: {
    width: moderateScale(120),
    height: moderateScale(100),
    borderRadius: moderateScale(10),
  },
  detailCol: {flex: 0.6},
  title: {
    fontSize: moderateScale(15),
    color: color.palette.black,
    marginBottom: moderateScale(5),
  },
  subTitle: {
    fontSize: moderateScale(12),
    color: color.palette.lightblack,
    marginBottom: moderateScale(2),
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: color.palette.black,
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
  },
  buttonLabel: {
    fontSize: moderateScale(12),
    color: color.palette.white,
  },
});
