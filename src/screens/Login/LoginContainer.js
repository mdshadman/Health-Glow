import React, { Component } from 'react';
import LoginView from './LoginView';

class LoginContainer extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      showHideEye: true
    };
  }


  goToLogin = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');
  };
  showHidePassword = () => {
    this.setState({ toggleEye: !this.state.toggleEye })
  };
  goToForgotPass = () => {
    // this.setState({ toggleEye: !this.state.toggleEye })
  };

  render() {
    const { toggleEye, showHideEye } = this.state;
    return (
      <LoginView
        goToLogin={this.goToLogin}
        showHidePassword={this.showHidePassword}
        goToForgotPass={this.goToForgotPass}
        showHideEye={showHideEye}
        toggleEye={toggleEye}

      />
    );
  }
}



export default LoginContainer;
