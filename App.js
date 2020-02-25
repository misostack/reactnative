/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

// import Hello from './Hello';
import Camera from './Camera';

const App: () => React$Node = () => {
  return (
    <React.Fragment>      
      <Camera />
    </React.Fragment>
  );
};

export default App;
