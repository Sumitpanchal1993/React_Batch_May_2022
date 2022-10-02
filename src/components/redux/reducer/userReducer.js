const data = [];

const UserDataReducer = (state= data, action)=>{
    switch (action.type) {
        case 'Add_User':
            return {
                ...state,
                data: action.payload
            }
            break;
        default:
            return state
            break;
    }
}

export default UserDataReducer;