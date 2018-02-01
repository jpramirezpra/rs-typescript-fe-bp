import { createStore } from 'redux';
import { exampleStoreReducer } from './example';
import { ExampleState } from '../models/example';

//apply middleware

//combinereducers

//apply redux extensions

export const store = createStore<ExampleState>(exampleStoreReducer);

//turn on logging
//subscribe logging event
store.subscribe(() => 
	console.dir(store.getState())
);