import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import multipleReducers from './reducers';
import { Header } from './components/common';

const App = () => {
  return (
    <Provider store={createStore(multipleReducers)}>
      <View>
       <Header headerText="ABC" />
      </View>
    </Provider>
  );
};

export default App;
