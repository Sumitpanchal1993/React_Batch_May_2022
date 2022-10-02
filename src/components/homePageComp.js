import { Button } from "@mui/material";
import React, { Component } from "react";
import RefExampleComponent from "./refExampleComp";
import RefExampleComponentTwo from "./refExampleCompTwo";
import {connect} from "react-redux";

class HomePageComp extends Component{
    constructor(props){
        super(props)
        this.state = {
            simpleObject: 'This is simple object',
            inputVal: '',
            showComponent: false
        }
        this.parentRef = React.createRef() // This is work for taking reference of component or controls. 
    }

    handlInput = (e) =>{
        // console.log("child component properties access through react reference in parent", this.parentRef.current.simpleMethod("Sumit"));
        // this.parentRef.current.componentRef.current.innerHTML = e.target.value;
        // this.setState({inputVal: e.target.value})
        if(e !== null){
            this.setState({
                ...this.state,
                showComponent: true
            })
        }

    }

    render(){
        
        return(
            <>
                <h2>This is number increment: {this.props.numInc}</h2>
                <h2>This is number decrement: {this.props.numDec}</h2>
                <h1>This is my home page</h1>
                    <Button variant="contained" onClick={this.handlInput} style={{marginTop: '10px'}}>Show me child component</Button>
                    <br />
                    <Button variant="primary" onClick={()=> this.setState({...this.state, showComponent: false})}>Hide Child component</Button>
                    {/* <RefExampleComponent ref={this.parentRef} /> */}
                     {/**calling child component with refs */}
                <div>
                    <h3>Import another chid component</h3>
                    {this.state.showComponent && <RefExampleComponentTwo ref={this.parentRef} /> }
                </div>

            </>
        )
    }
}

const mapStateToProps = (props) =>{
    return{
        numInc : props.increment,
        numDec: props.decrement
    }
}

export default connect(mapStateToProps)(HomePageComp);