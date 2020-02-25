import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Hello extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: 'Hello world'
		}
	}

  render() {  	
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{this.state.data}</Text>
      </View>
    );
  }
}