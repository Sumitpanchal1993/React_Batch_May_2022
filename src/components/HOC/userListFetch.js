import React, { Component } from "react";

// Business logic which need to reusable
// What is business logic=> Related with requirement. 
// Requirement: I need fetch data from api or from local files. Which is show user name.

// This is a higer order component which utilise common business logic in other component which wrapped to HOC component

const userListCommon = (WrappedComponent) => {

    class UserListFetch extends Component {
        constructor() {
            super()
            this.state = {
                userlist: []
            }
        }

        // fetch user list using api endpoint

        componentDidMount() {
            fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then((data) => {
                this.setState({ userlist: data })
            })
        }


        render() {
            return (
                <>
                    <WrappedComponent userList={this.state.userlist} />
                </>
            )
        }
    };

    return UserListFetch;

}

export default userListCommon; // HOC component

function test(){
    var test = 100
    return test
}
