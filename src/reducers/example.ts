//import Types and Interfaces
import { EXAMPLE_ACTION, ExampleState } from '../models/example';
import { ExampleActions } from 'src/actions/example';

//Define Initial State for Store
export const initialState: ExampleState = {
	message: 'This is the default Message'
};

//reducer intercepts actions used to update store
export function exampleStoreReducer( state: ExampleState = initialState, action: ExampleActions): ExampleState {
	//make partial object of state to combine at the end
	let partialState: Partial<ExampleState> | undefined;

	//hook into event and grab value from action to make a partial state
	if(action.type === EXAMPLE_ACTION) {
		partialState = { message: action.message };
	}
	//return state updated with partial state 
	return partialState != null ? { ...state, ...partialState } : state;
}