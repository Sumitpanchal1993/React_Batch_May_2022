import React, { Component } from "react";
import userListCommon from "./userListFetch"; // This is higer order component

class ShowUserList extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <h1>ShowUserList component</h1>
                <ul>
                    {this.props.userList.map((item)=>
                        <li key={item.id}>{item.name}</li>
                    )}
                </ul>
            </>
        )
    }
}

const MakeHoc = userListCommon(ShowUserList); // This component will assign as parameter to HOC which represent there business logic

export default MakeHoc;