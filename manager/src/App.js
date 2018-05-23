import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyDURQ5X9CZjBdIheSWTwVYlG_nEgOBKpIY',
    authDomain: 'manager-90d3e.firebaseapp.com',
    databaseURL: 'https://manager-90d3e.firebaseio.com',
    projectId: 'manager-90d3e',
    storageBucket: '',
    messagingSenderId: '591072252192'
  };

  firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      // createStore needs a default reducer
      <Provider store={store}>
        <View>
          <Header headerText="Header" />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
