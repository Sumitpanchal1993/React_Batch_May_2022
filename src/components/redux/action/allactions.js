const Increment = ()=>{
    return{
        type: 'Increment',
        payload: 10
    }
}

const Decrement = ()=>{
    return{
        type: 'Decrement',
        payload: 1
    }
}

const UserAdd = () =>{
    return{
        type: 'Add_User',
        payload: [{id: Math.random(), name: ''}]
    }
}


export {Increment, Decrement, UserAdd};