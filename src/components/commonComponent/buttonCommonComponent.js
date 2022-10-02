import React from "react";
import { Navigate as navigate } from "react-router-dom";
import Button from '@mui/material/Button';

class ButtonCommonComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            props,
            conditionalCall: true
        }
    }

    sendInformationFromChild(){
        // console.log("this.state", this.state.props);
        this.state.props.data.userInformation.name = "Name is updated from child";

        // this.navigate('/userRegistration')
        if(this.state.conditionalCall){
            this.state.props.triggerAction(this.state.props.data);
        }else{
            this.state.props.triggerActionTwo();
        }
    }

    render(){
        // const{buttonFontProp, buttonColorProp, buttonTextProps, textColorProps, buttonVariant} = this.state.props.data.styleData;
        const{messageData} = this.state.props;
        console.log("buttonVariant", this.state.props)
        return(
                <>
                    <div className="div1">
                        {/* <button type="button" onClick={()=> this.sendInformationFromChild()} style={{fontSize: `${buttonFontProp}`, backgroundColor: `${buttonColorProp}`, color: `${textColorProps}`}}>{buttonTextProps}</button> */}
                    </div>
                    <h1>Button from bootstrap</h1>
                    {/* <Button variant={`${buttonVariant}`}>I am from bootstrap</Button> */}
                    <br />
                    <Button variant={this.state.props.variant ? this.state.props.variant : 'outlined'} disableRipple={false} fullWidth size={'large'}>Contained</Button>
                </>
        )
    }
}

export default ButtonCommonComponent;