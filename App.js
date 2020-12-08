import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/Navigation/Auth';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from "react-redux";

const store = createStore(
  applyMiddleware(thunk)
);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;

