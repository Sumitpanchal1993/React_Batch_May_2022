
const initialState = 10;

const decrementReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Decrement':
            return state - 1
            break;
        default:
            return state
            break;
    }

}

export default decrementReducer;