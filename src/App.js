import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { 
  BrowserRouter as Router, 
  Routes,
  Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize=9;
  api=process.env.REACT_APP_NEWS_API
  state={
    progress:0,
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
         <Navbar/>
         <LoadingBar color='#f11946' progress={this.state.progress}/>
         <Routes>
         <Route path="/" element={<News changeProgress={this.setProgress} api={this.api} key="all" pageSize={this.pageSize} country="in" category="general"/>}></Route>
         <Route path="/science" element={<News changeProgress={this.setProgress} api={this.api} key="science" pageSize={this.pageSize} country="in" category="science"/>}></Route>
         <Route path="/sports" element={<News changeProgress={this.setProgress} api={this.api} key="sports" pageSize={this.pageSize} country="in" category="sports"/>}></Route>
         <Route path="/general" element={<News changeProgress={this.setProgress} api={this.api} key="general" pageSize={this.pageSize} country="in" category="general"/>}></Route>
         <Route path="/business" element={<News changeProgress={this.setProgress} api={this.api}  key="business" pageSize={this.pageSize} country="in" category="business"/>}></Route>
         <Route path="/technology" element={<News changeProgress={this.setProgress} api={this.api} key="technology" pageSize={this.pageSize} country="in" category="technology"/>}></Route>
         <Route path="/health" element={<News changeProgress={this.setProgress} api={this.api} key="health" pageSize={this.pageSize} country="in" category="health"/>}></Route>
         <Route path="/entertainment" element={<News changeProgress={this.setProgress} api={this.api} key="" pageSize={this.pageSize} country="in" category="entertainment"/>}></Route>
         <Route path="/entertainment" element={<News changeProgress={this.setProgress} api={this.api} key="" pageSize={this.pageSize} country="in" category="entertainment"/>}></Route>
         </Routes>
        </Router>
      </div>
    )
  }
}
