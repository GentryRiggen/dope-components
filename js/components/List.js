import React from 'react';
import {
  ListView,
  RefreshControl,
  View,
} from 'react-native';
import SortableListView from 'react-native-sortable-listview';
import Icon from './Icon';
import ListItem from './ListItem';
import Spinner from './Spinner';
import StyleSheet from './lib/StyleSheet';
import theme from './lib/theme';

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
const noOp = () => null;

class List extends React.Component {
  static propTypes = {
    dataSource: React.PropTypes.any.isRequired,
    onRefreshRequested: React.PropTypes.func,
    isRefreshing: React.PropTypes.bool,
    onEndReached: React.PropTypes.func,
    onEndReachedThreshold: React.PropTypes.number,
    isFetchingMore: React.PropTypes.bool,
    isSorting: React.PropTypes.bool,
    sortOrder: React.PropTypes.array,
    onRowMoved: React.PropTypes.func,
  };

  static defaultProps = {
    dataSource: [],
    onRefreshRequested: noOp,
    isRefreshing: false,
    onEndReached: noOp,
    onEndReachedThreshold: 250,
    isFetchingMore: false,
    isSorting: false,
    sortOrder: [],
    onRowMoved: noOp,
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
    const {
      onRefreshRequested,
      isRefreshing,
    } = this.props;
    if (onRefreshRequested !== noOp) {
      return (
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefreshRequested}
          tintColor={theme.colors.primaryColor}
        />
      );
    }

    return null;
  }

  renderFetchingMore() {
    if (this.props.isFetchingMore) {
      return <View style={styles.fetchingMore}><Spinner /></View>;
    }

    return null;
  }

  render() {
    const {
      dataSource,
      isSorting,
      sortOrder,
      onRowMoved,
      onEndReached,
      onEndReachedThreshold,
      style,
    } = this.props;

    if (isSorting) {
      console.log('Rendering sortable list view');
      return (
        <SortableListView
          style={[
            { flex: 1 },
            style,
          ]}
          data={dataSource}
          order={sortOrder}
          onRowMoved={(e) => {
            onRowMoved(e);
            this.forceUpdate();
          }}
          renderRow={row => (
            <ListItem
              {...{
                ...row,
                rightContent: (
                  <Icon
                    name="md-reorder"
                    size={24}
                    type="regular"
                  />
                ),
                leftSwipeButtons: [],
                rightSwipeButtons: [],
              }}
            />
          )}
        />
      );
    }

    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => <ListItem {...rowData} />}
          refreshControl={this.getRefreshControl()}
          enableEmptySections
          onEndReached={onEndReached}
          onEndReachedThreshold={onEndReachedThreshold}
        />
        {this.renderFetchingMore()}
      </View>
    );
  }
}

export default List;
