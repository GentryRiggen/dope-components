import React from 'react';
import {
  Modal as RNModal,
  View,
} from 'react-native';
import theme from '../common/theme';
import Button from './Button';
import Text from '../typography/Text';
import StyleSheet from '../common/StyleSheet';

class Modal extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    title: React.PropTypes.string,
    primaryActionTitle: React.PropTypes.string,
    onPrimaryActionPress: React.PropTypes.func.isRequired,
    primaryActionDisabled: React.PropTypes.bool,
    secondaryActionTitle: React.PropTypes.string,
    onSecondaryActionPress: React.PropTypes.func.isRequired,
    secondaryActionDisabled: React.PropTypes.bool,
    open: React.PropTypes.bool.isRequired,
    onRequestClose: React.PropTypes.func,
    scrollable: React.PropTypes.bool,
  };

  static defaultProps = {
    title: '',
    primaryActionTitle: 'OK',
    secondaryActionTitle: 'CANCEL',
  };

  renderHeader() {
    const {
      title,
      primaryActionTitle,
      onPrimaryActionPress,
      primaryActionDisabled,
      secondaryActionTitle,
      onSecondaryActionPress,
      secondaryActionDisabled,
    } = this.props;

    const actionButtonText = { color: '#FFF' };
    const actionButtonTextDisabled = { color: '#888888' };
    const actionButtonTextPrimary = { color: theme.brandPrimary };

    const primaryStyle = primaryActionDisabled ? actionButtonTextDisabled : actionButtonTextPrimary;
    const secondaryStyle = secondaryActionDisabled ? actionButtonTextDisabled : actionButtonText;
    return (
      <View
        style={styles.header}
      >
        <View
          style={[styles.action, styles.actionLeft]}
        >
          <Button
            text={secondaryActionTitle}
            onPress={onSecondaryActionPress}
            textStyle={secondaryStyle}
            disabled={secondaryActionDisabled}
            transparent
          />
        </View>

        <Text
          type="h2"
          style={styles.headerTitle}
        >
          {title}
        </Text>

        <View
          style={[styles.action, styles.actionRight]}
        >
          <Button
            text={primaryActionTitle}
            onPress={onPrimaryActionPress}
            textStyle={primaryStyle}
            disabled={primaryActionDisabled}
            transparent
          />
        </View>
      </View>
    );
  }

  render() {
    const {
      open,
      children,
    } = this.props;
    return (
      <RNModal
        animationType={"slide"}
        transparent={false}
        visible={open}
        onRequestClose={() => null}
      >
        {this.renderHeader()}
        {children}
      </RNModal>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.brandSidebar,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 64,
    paddingLeft: 4,
    paddingRight: 4,
    ios: {
      paddingTop: 20,
    },
    android: {
      paddingTop: 0,
    },
  },
  headerTitle: {
    color: '#FFFFFF',
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
  },
  action: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: 100,
  },
  actionLeft: {
    justifyContent: 'flex-start',
  },
  actionRight: {
    justifyContent: 'flex-end',
  },
});

export default Modal;