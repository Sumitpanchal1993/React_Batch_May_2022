import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import UserRegistrationComponent from './components/userRegisterationComponent';
import ListRenderComponent from './components/commonComponent/listrenderComponent';
import TableStructureComponent from './components/commonComponent/tableStructureComponent';
import UserInformationComponent from './components/userInformationComponent';
import ThirdComponentTest from './components/thirdComponentTest';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import RouteComponent from './components/routes/routeComponent';
import HomePageComp from './components/homePageComp';
import UserRegiChildComp from './components/userRegiChildComp';
import FooterComponent from './components/commonComponent/footerComponent';
import MaterialGridComponent from './components/materialGridComp';
import {MaterialTableComponent} from './components/materialTableExample';
import CommonCompTest from './components/commonComponentTest';
import UserListFetch from './components/HOC/userListFetch';
import MakeHoc from './components/HOC/showUserList';
import UserHocLogicCompList from './components/HOC/userHocLogicComp';
import DataFetchUsingApi from './components/dataFetchUsingApi';

const testImage = require("../src/assets/back06.jpg")

class App extends Component {
    constructor(){
      super();
      this.state = {
        dynamicData: [12121, "noimages", testImage, "Some text working with child", "testEle" ],
        tableData: [
          {name: "Name from App js", phoneNo: "7868778888"},
          {name: "Name2", phoneNo: "7868778888"},
          {name: "Name3", phoneNo: "7868778888"},
          {name: "Name4", phoneNo: "7868778888"}
        ]
      };
    }
  
  // Mounting phase
  //componentDidMount is method of mounting phase
  // IN mounting phase 2 method are get called componentDidMount, render
  // At mounting phase we need to set some logic on state value
    componentDidMount(){
        // console.log("My component is mounting");
        // setInterval(() => {
        //   this.setState({count: this.state.count + 1})
        // }, 2000);
    }

  // update phase of component
  // When it will call => it call based on setState method will change something.
  // After this method will get called then again render will get called and render component and update the content
    componentDidUpdate(){
      // console.log("Component did update get called")
    }

  
  // unmounting phase
    componentWillUnmount(){
      clearInterval(this.state.count == 5);
    }
  
  render() {
    return (
      <div className="App">
        <Router>
          <RouteComponent />
          <Routes>
              
              <Route exact path='/userinfo' element={<UserInformationComponent />}></Route>
              <Route path='/commonTest' element={<CommonCompTest />}></Route>
              {/* <Route path='/' element={<HomePageComp />}></Route>
              <Route path='/thirdcomp' element={<ThirdComponentTest />}></Route>
              <Route exact path='/userRegistration' element={<UserRegistrationComponent />}></Route>
              <Route path='/userRegistration/createUser' element={<UserRegiChildComp />}></Route>
              <Route path='/materialGrid' element={<MaterialGridComponent />}></Route> */}
              <Route path='/materialTable' element={<MaterialTableComponent />}></Route>
              <Route path='/makeHoc' element={<MakeHoc />}></Route>
              <Route path='/userHocLogic' element={<UserHocLogicCompList />}></Route>
              <Route path='/dataFetch' element={<DataFetchUsingApi />}></Route>
          </Routes>
        </Router>
        <FooterComponent />
      </div>
    )
  }

}
export default App;
