import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet, Image} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {_getPeople} from 'services/StarWarsServices';
import {color} from 'theme';
import PeopleList from './components/PeopleList';
import {_getMorePeople} from '../../services/StarWarsServices';
import Loader from 'components/Loader';
export default class People extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      peopleList: [],
      loading: true,
      loadingMore: false,
    };
  }

  componentDidMount() {
    this.getPeople(1);
  }

  async getPeople(id) {
    this.setState({loading: true});

    let response = await _getPeople(id);

    this.setState({loading: false});

    if (!response) {
      //something went wrong or no internet
    } else {
      let peopleList = response.results.length > 0 ? response.results : [];

      this.setState({data: response, peopleList});
    }
  }

  loadMoreData = async () => {
    let {data, peopleList} = this.state;

    if (data.next) {
      this.setState({loadingMore: true});

      let response = await _getMorePeople(data.next);

      this.setState({loadingMore: false});

      if (!response) {
        //something went wrong or no internet
      } else {
        let morePeopleList =
          response.results.length > 0
            ? peopleList.concat(response.results)
            : peopleList;

        this.setState({data: response, peopleList: morePeopleList});
      }
    }
  };

  renderHeader() {
    let {data, peopleList, loading} = this.state;
    let {count} = styles;
    let totalRecords = data && data.count ? data.count : 0;

    if (loading) {
      return (
        <View style={count}>
          <Loader active={loading} />
        </View>
      );
    } else {
      return (
        <Text style={count}>
          Records: {peopleList.length} - {totalRecords}{' '}
        </Text>
      );
    }
  }

  render() {
    let {peopleList, loadingMore} = this.state;
    let {container, count} = styles;

    return (
      <View style={container}>
        {this.renderHeader()}

        <PeopleList data={peopleList} loadMore={this.loadMoreData} />

        <View style={count}>
          <Loader active={loadingMore} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: color.palette.white},
  count: {
    marginVertical: moderateScale(10),
    fontSize: moderateScale(15),
    color: color.palette.lightblack,
    textAlign: 'center',
  },
});
