
const initialState = 0;

const incrementReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Increment':
            return state + action.payload
            break;
        default:
            return state
            break;
    }

}

export default incrementReducer;