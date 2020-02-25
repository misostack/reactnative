import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Pusher from 'pusher-js/react-native';

Pusher.logToConsole = true;

import { of, BehaviorSubject  } from 'rxjs'

import { mergeMap, delay, takeUntil } from 'rxjs/operators';
import Config from './config.local';

const socket = new Pusher(Config.PUSHER_API_KEY, Config.PUSHER_OPTIONS);

const channel = socket.subscribe('my-channel');


export default class Hello extends Component {

	message$ = new BehaviorSubject("")

	constructor(props) {
		super(props)
		this.state = {
			data: 'Hello world'
		}

	}

  componentDidMount() {
  	try{
			
  		this.message$.pipe(delay(1000)).subscribe(value => {
				console.log(value)
				this.setState({
					data: this.state.data + '\n' + value
				})  			
  		})

			of(1, 2, 3, 'Hello', 'World')
			.pipe(delay(1000))
			.subscribe(value => {
				this.message$.next(Date.now().toString() + ':' + value)
			})  		
	 //  	console.log('abc')
		// 	console.log('channel', channel)

			channel.bind('my-event',
			    (data) => {
			        this.message$.next(Date.now().toString() + ':' + JSON.stringify(data))
			    }
			);

		}catch(err){
			console.error(err)
		}
  }

  componentWillUnmount() {

  }  


  render() {  	
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      	<Text>Chat View</Text>
        <Text>{this.state.data}</Text>
      </View>
    );
  }
}