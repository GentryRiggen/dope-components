import React from 'react';
import {
  ListView,
  RefreshControl,
} from 'react-native';
import ListItem from './ListItem';
import theme from './lib/theme';

class List extends React.Component {
  static propTypes = {
    dataSource: React.PropTypes.any.isRequired,
    onRefreshRequested: React.PropTypes.any,
    isRefreshing: React.PropTypes.bool,
  };

  static defaultProps = {
    dataSource: [],
    onRefreshRequested: false,
    isRefreshing: false,
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

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <ListItem {...rowData} />}
        refreshControl={this.getRefreshControl()}
        enableEmptySections
        style={[
          {
            flex: 1,
          },
          this.props.style
        ]}
      />
    );
  }
}

export default List;