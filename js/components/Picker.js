import React from 'react';
import {
  TouchableHighlight,
  View,
} from 'react-native';
import Icon from './Icon';
import List from './List';
import Modal from './Modal';
import Text from './Text';
import theme from './lib/theme';
import StyleSheet from './lib/StyleSheet';

const styles = StyleSheet.create({
  container: {
    height: 36,
  },
  buttonContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: theme.colors.grey[600],
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 8,
    paddingRight: 8,
  },
});

class Picker extends React.Component {
  static propTypes = {
    items: React.PropTypes.object.isRequired,
    selected: React.PropTypes.any.isRequired,
    onItemSelected: React.PropTypes.func.isRequired,
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleOpen() {
    return () => {
      this.setState({ open: !this.state.open });
    };
  }

  itemSelected(key) {
    return () => {
      this.props.onItemSelected(key);
      this.toggleOpen()();
    };
  }

  renderSelected(key) {
    if (this.props.selected == key) {
      return (
        <Icon
          name="md-checkmark"
        />
      );
    }

    return null;
  }

  renderButton() {
    return (
      <TouchableHighlight
        onPress={this.toggleOpen()}
        style={styles.buttonContainer}
        underlayColor={theme.colors.grey[200]}
      >
        <View style={styles.buttonContent}>
          <Text>{this.props.items[this.props.selected].name}</Text>

          <Icon name="md-arrow-dropdown" />
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    const {
      items,
    } = this.props;
    return (
      <View
        style={styles.container}
      >
        {this.renderButton()}

        <Modal
          title="Select one"
          secondaryTitle="Cancel"
          secondaryAction={this.toggleOpen()}
          visible={this.state.open}
        >
          <List
            dataSource={Object.keys(items).map(key => ({
              headerText: items[key].name,
              onPress: this.itemSelected(key),
              divider: true,
              rightContent: this.renderSelected(key),
            }))}
          />
        </Modal>
      </View>
    );
  }
}

export default Picker;
