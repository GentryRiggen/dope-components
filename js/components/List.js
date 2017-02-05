import React from 'react';
import {
  ListView,
  RefreshControl,
  View,
} from 'react-native';
import ListItem from './ListItem';
import Spinner from './Spinner';
import StyleSheet from './lib/StyleSheet';
import theme from './lib/theme';

class List extends React.Component {
  static propTypes = {
    dataSource: React.PropTypes.any.isRequired,
    onRefreshRequested: React.PropTypes.any,
    isRefreshing: React.PropTypes.bool,
    onEndReached: React.PropTypes.any,
    onEndReachedThreshold: React.PropTypes.number,
    isFetchingMore: React.PropTypes.bool,
  };

  static defaultProps = {
    dataSource: [],
    onRefreshRequested: false,
    isRefreshing: false,
    onEndReached: false,
    onEndReachedThreshold: 250,
    isFetchingMore: false,
  };

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      dataSource: ds.cloneWithRows(props.dataSource),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
    });
  }

  getRefreshControl() {
    if (this.props.onRefreshRequested) {
      return (
        <RefreshControl
          refreshing={this.props.isRefreshing}
          onRefresh={this.props.onRefreshRequested}
          tintColor={theme.colors.primaryColor}
        />
      );
    }
  }

  renderFetchingMore() {
    console.log(this.props.isFetchingMore);
    if (this.props.isFetchingMore) {
      return <View style={styles.fetchingMore}><Spinner /></View>
    }

    return null;
  }

  render() {
    let {
      onEndReached,
      onEndReachedThreshold,
    } = this.props;
    onEndReached = onEndReached ? onEndReached : (() => null);
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <ListItem {...rowData} />}
          refreshControl={this.getRefreshControl()}
          enableEmptySections
          onEndReached={onEndReached}
          onEndReachedThreshold={onEndReachedThreshold}
          style={[
          {
            flex: 1,
          },
          this.props.style
        ]}
        />
        {this.renderFetchingMore()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  fetchingMore: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default List;