//DEFINE ACTION NAMES AND TYPES TO USE LATER
// ACTION Name and Type(to include in interfaces)
export const EXAMPLE_ACTION = 'EXAMPLE_ACTION';
export type EXAMPLE_ACTION = typeof EXAMPLE_ACTION;

//Define State Shape
export interface ExampleState {
    message: string;
}