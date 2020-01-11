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

class PeopleList extends PureComponent {
  handleLoadMore = () => {
    this.props.loadMore();
  };

  getFilmDetails(item) {
    console.log('getFilmDetails', this.props, item.homeworld);
    this.props.navigation.navigate('Planet', {route: item.homeworld});
  }

  renderPeopleItems = ({item, index}) => {
    let {itemContainer, avatarCol, avatar, detailCol, title, subTitle} = styles;

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
          <TouchableOpacity onPress={() => this.getFilmDetails(item)}>
            <Text>File</Text>
          </TouchableOpacity>
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
  avatarCol: {flex: 0.3},
  avatar: {
    width: moderateScale(100),
    height: moderateScale(80),
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
});
