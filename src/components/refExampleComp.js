import React, { Component } from "react";

class RefExampleComponent extends Component {
    constructor() {
        super()
        this.state = { }
        this.componentRef = React.createRef();
    }

    handleFocus = (e) =>{
        console.log('childfocus', e);
        // this.componentRef.current.value = "Make value changed by ref";
        this.componentRef.current.value = e;
    }

    checkPropertiesChild = () =>{
        alert("This is method on child checked from parent using refs");
    }

    render() {
        console.log(this.state)
        return (
            <>
                <h1>Ref example</h1>
                <h3>This is child component</h3>
                <input ref={this.componentRef} type={'text'} value={'child input'} onChange={this.handleFocus} />
            </>
        )
    }
}

export default RefExampleComponent;