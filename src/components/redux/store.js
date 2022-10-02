// What is redux => This is library which ustilise to maintain a state through out the application or applcation state

// 1. redux will maintain the application state.
// 2. Not require props drilling. Means multiple tree with parent and child assigning props
// 3. Based on user action state can easily changed.
// 4. It will user middleware to perform any kind of async.
// 5. 2 middlware used in redux: thunk and Saga.

// Difference between thunk and saga
// 1. Both are generate promise => thunk return result in promise where saga return result in function generator.
// Saga it will return function not generate any object. While you access with saga then it will use watcher to track the details.
// thunk will generate promise easier to access data because its generate an object.

// Saga will user dispatch method to send action and payload to reducer.
// thunk will use payload to send action to the reducer.

// Redux archetecture;

// Divided int 3 parts:
// 1. Store 2. Reducer  3. action

// store => will configure at application root level file. It will provider container from redux which understand the store of application.
// <Provider store={store}></Provider>
// In redux only single store is used. We can not define multiple store using redux

// Reducer: reducer will accept two parameters 1.state 2.action based on this two parameters it will made changes into state.

// Action: In action we define static actions. This action will used to make changes for state.


// store have value like name: 'Vision' 
// state value change in another component name: 'Technology'
// impact should thrugh out the application because that store has been configure in root level

// Scenario: example of decrement and increment number

// need maintain 2 actions. 
// 1. Number should be increment by 1
// 2. Number should be decrement by 1

import { configureStore, combineReducers} from "@reduxjs/toolkit";
import incrementReducer from "./reducer/incrementReducer";
import decrementReducer from "./reducer/decrementReducer";
import UserDataReducer from "./reducer/userReducer"

const multipleReducer = combineReducers({
    increment: incrementReducer,
    decrement: decrementReducer,
    userData : UserDataReducer
})

// 18 version before we user creatstore method from redux.
let store = configureStore({ reducer: multipleReducer });

export default store;


