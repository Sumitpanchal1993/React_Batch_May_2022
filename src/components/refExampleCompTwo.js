import React, { Component } from "react";

class RefExampleComponentTwo extends Component{

    constructor(){
        super()
        this.state = { name: '', showTest: false}
        this.inputref = React.createRef()
    }

    simpleMethod = (e) =>{
        console.log("This is simple method in child");
        this.inputref.current.focus();
        this.setState({name: e})
    }

    logicBuild = (e) =>{
        
        if(e.target.value === 'Test'){
            this.setState({
                ...this.state, // It will merged the other variable value which trigger in last moment
                name : e.target.value,
                showTest: true
            })
        }else{
            this.setState({name : e.target.value})
        }
    }

    render(){
        return(
            <>
                <h1>This another child of react Ref. </h1>
                <input ref={this.inputref} type={'text'} placeholder={'Second Example Refs'} value={this.state.name} onChange={(e)=> this.logicBuild(e) } />

                <div>This is not test value: {this.state.name}</div>
                {/* {
                    this.state.showTest ? <div>This will see based on input Test value</div> : null
                } */}
                {this.state.showTest && <h1>This will see based on input Test value</h1>}
            </>
        )
    }
}

export default RefExampleComponentTwo

// What is control and uncontrol component. 
// Control component: Which not dependent on its own state. There input has been controlled by outside component

// Uncontrol component: It is purely dependent on there own component. It will controlled inputs by there component