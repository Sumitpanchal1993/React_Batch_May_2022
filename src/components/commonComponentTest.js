import React, { Component } from "react";
import ButtonCommonComponent from "./commonComponent/buttonCommonComponent";
import {connect} from 'react-redux';
import { Increment } from "./redux/action/allactions";
import { Button } from "@mui/material";

class CommonCompTest extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const variantObj = "contained";
        return(
            <>
                <h1>This is increment number: {this.props.numInc}</h1>
                <h1>This is decrement number: {this.props.numDec}</h1>
                <h2>THis is test for import common button component</h2>
                {/* <ButtonCommonComponent variant={variantObj} /> */}
                <Button variant="success" onClick={()=> this.props.numbIncfromanotherComp()} >Increment No from Test Component</Button>
            </>
        )
    }
}

const mapStateToProps = (props) =>{
    return{
        numInc: props.increment,
        numDec: props.decrement
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        numbIncfromanotherComp: () => dispatch(Increment())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommonCompTest);