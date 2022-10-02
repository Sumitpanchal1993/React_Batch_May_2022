import React from "react";
import ButtonCommonComponent from "./commonComponent/buttonCommonComponent";

class ThirdComponentTest extends React.Component{
    constructor(){
        super()
        this.state = {
            styleData: {
                buttonFontProp: '14px',
                buttonColorProp: 'blue',
                buttonTextProps: 'This Component',
                buttonVariant: 'success'
            }
        }
    }

    render(){
        return(
            <div>
                <h1>This is my third component to test common button</h1>
                <ButtonCommonComponent messageData={'This is my third component to test common button'} data={this.state} />
            </div>
        )
    }
}

export default ThirdComponentTest;