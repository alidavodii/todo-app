import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import TodoScreen from './src/screens/TodoScreen';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <TodoScreen />
    </Provider>
  );
}

export default App;
