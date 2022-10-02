import React from "react";
import Reac from "react"

class ListRenderComponent extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ul>
                {this.props.dynamicData.map((item) =>(
                    <li>{item}</li>
                ))}
            </ul>
        )
    }
}

export default ListRenderComponent;