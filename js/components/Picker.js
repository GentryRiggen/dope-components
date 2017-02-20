import React from 'react';
import R from 'ramda';
import {
  View,
} from 'react-native';
import Icon from './Icon';
import List from './List';
import ListItem from './ListItem';
import Modal from './Modal';
import StyleSheet from './lib/StyleSheet';

const styles = StyleSheet.create({
  container: {
    height: 36,
  },
});

class Picker extends React.Component {
  static propTypes = {
    items: React.PropTypes.object.isRequired,
    selected: React.PropTypes.any.isRequired,
    onItemSelected: React.PropTypes.func.isRequired,
  };

  static defaultProps = {};

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
    const {
      items,
      selected,
    } = this.props;
    const selectedItem = R.propOr({}, selected, items);
    const headerText = R.propOr('None', 'headerText', selectedItem);
    const leftContent = R.propOr(false, 'leftContent', selectedItem);
    return (
      <ListItem
        headerText={headerText}
        leftContent={leftContent}
        rightContent={<Icon name="md-arrow-dropdown" />}
        onPress={this.toggleOpen()}
        divider
      />
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
              ...items[key],
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
