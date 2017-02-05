import React from 'react';
import { ListView } from 'react-native';
import ListItem from './ListItem';

class List extends React.Component {
  static propTypes = {
    dataSource: React.PropTypes.any.isRequired,
  };

  static defaultProps = {
    dataSource: [],
  };

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows(props.dataSource),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
    });
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <ListItem {...rowData} />}
        style={this.props.style}
      />
    );
  }
}

export default List;