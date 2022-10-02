import React, { Component } from "react";
import ListRenderComponent from "./commonComponent/listrenderComponent";
import TableStructureComponent from "./commonComponent/tableStructureComponent";
import ButtonCommonComponent from "./commonComponent/buttonCommonComponent";
import { Navigate } from "react-router-dom"

class UserRegistrationComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            styleData: {
                buttonFontProp: '20px',
                buttonColorProp: 'red',
                buttonTextProps: 'Register'
            }
        };
    }

    routerChild(){
      return  <Navigate to="/userinfo/createUser" />
    }

    render() {
        return (
            <div>
                <h1>User registration component</h1>
                <ButtonCommonComponent messageData={'This is from user registration component'} data={this.state} />
                {/* <input type={'button'} value={'Click to register user'} onClick={() => this.routerChild()} /> */}
            
            </div>
        )
    }
}

export default UserRegistrationComponent;