import { EXAMPLE_ACTION } from '../models/example';

// Action Function Interfaces - this is an extra step to define what is returned
export interface ExampleAction {
	type: EXAMPLE_ACTION;
	message: string;
}

// Action Function
// in this example we are declaring a function that takes a string(message) and returns an ExampleResult defined above
export function exampleAction(message: string): ExampleAction {
	return {
		type: EXAMPLE_ACTION, 
		message: message
	};
}

// Return all the action types in order to define actions
// In order to add multiple actions just add a bar
// export type ExampleActions = ExampleAction | ExampleAction2 | ExampleAction3;
export type ExampleActions = ExampleAction;