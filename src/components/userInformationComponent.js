import React from "react";
import ButtonCommonComponent from "./commonComponent/buttonCommonComponent";
import {connect} from 'react-redux';
import { Button, Grid } from "@mui/material";
import { Decrement, Increment } from "./redux/action/allactions";

class UserInformationComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            styleData: {
                buttonFontProp: '54px',
                buttonColorProp: '#000000',
                buttonTextProps: 'User Information Component',
                textColorProps: '#ffffff',
                buttonVariant: 'primary'
            },
            userInformation:{
                name: "Parent comp text"
            }
        }
    }

    componentDidUpdate(){
        console.log("set state ge calling")
    }

    triggerFromChildOnly(dataFromChild){
        console.log("Value comes from child =>", dataFromChild);
        // this.setState(...e)
    }

    secondAction(){
        alert("This is second action called from child")
    }

    addUserInList = () =>{

    }

    setControlValue = (e) =>{
        console.log("event capture", e)
        this.setState({
            ...this.state.userInformation,
            name: e.target.value
        })
    }

    render(){
        return(
            <>
                <h1>This is increment number: {this.props.inc}</h1>
                <h1>This is increment number: {this.props.dec}</h1>
                <Grid container>
                    <Grid item sm={12} md={12}>
                        <Button variant="success" onClick={()=> this.props.incrementNum()}>Increment</Button>
                    </Grid>
                    <Grid item sm={12} md={12}>
                        <Button variant="outlined" onClick={()=> this.props.decrementNum()}>Decrement</Button>
                    </Grid>
                    <Grid item sm={12} md={12}>
                        <input type={'text'} value={''} onChange={(data)=> this.setControlValue(data)} />
                        <Button variant="outlined" onClick={()=> this.addUserInList()}>Submit</Button>
                    </Grid>
                </Grid>
            </>
        )
    }
}

// this method will help to access all the state from redux store.
const mapStateToProps= (props)=>{
    return {
        inc: props.increment,
        dec: props.decrement
    }
}

const mapDispatchToProps= (dispatch)=>{
    return{
        incrementNum: ()=> dispatch(Increment()),
        decrementNum: () => dispatch(Decrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInformationComponent);