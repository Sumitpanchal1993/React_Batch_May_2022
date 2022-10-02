import axios from "axios";
import React, { Component } from "react";
import { get, post } from "./api/api";
import { postUser, userApi } from "./api/baseUrl";


class DataFetchUsingApi extends Component {
    constructor() {
        super()
        this.state = {
            apiData: null,
            inputValue: '',
            name: '',
            job: ''
        }
    }

    componentDidMount() {
        // First inbuild method to communicate with server
        fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then((res) => {
            console.log(res)
            this.setState({ apiData: res })
        })
    }

    postData(e) {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
        // this.setState({
        //     ...this.state,
        //     name: e.target.name ? e.target.value : '',
        //     job: e.target.job ? e.target.value : '',
        // })
    }

    async apiCall() {
        console.log("state value", this.state);

        // How to handle the unhandle error or exception

        // try{
        //     const rawResponse = fetch('https://reqres.in/api/users-yryeryeryr', {
        //         method: 'POST', // HTTP method GET, POST, DELETE, PUT, PATCH
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json',
        //             'Allow-Access-Origin': '*'
        //         },
        //         body: JSON.stringify({ test: this.state.name, test2: this.state.job })
        //     });
        //     const content = await rawResponse.then((response)=> response.json()).then((res)=> console.log(res));
        // }catch(err){console.log(err)}
        // finally{
        //     console.log("finally block exe")
        // }
        // axios.get('https://jsonplaceholder.typicode.com/users')
        //     .then(function (response) {
        //         // handle success
        //         console.log("Axios call response=> ",response);
        //     }).catch(function (error) {
        //         // handle error
        //         console.log(error);
        //     }).then(function () {
        //         // always executed
        //     });

        // await get(userApi).then((response)=>{
        //     console.log("response in common api call", response)
        // }).catch((err)=> console.log(err))
        await post(postUser, { test: this.state.name, test2: this.state.job }).then((res)=>
            console.log("user submit response", res)
        ).catch((err)=> console.log("error while post data", err))
    }

    //What is async and await
    // async => Which process we define that convert into asyn format. It will wait unitil result will not processed
    // await => Await is help to make process synchronously. It will generate result one by one

    render() {
        return (
            <>
                <h1>Test connection</h1>
                <div>
                    <label>Name:</label>
                    <input type={'text'} value={this.state.name} onChange={(e) => this.postData(e)} name="name" />
                </div>
                <div>
                    <label>Job:</label>
                    <input type={'text'} value={this.state.job} onChange={(e) => this.postData(e)} name="job" />
                </div>
                <div>
                    <input type={'button'} onClick={() => this.apiCall()} value={'Submit'} />
                </div>
            </>
        )
    }
}

export default DataFetchUsingApi