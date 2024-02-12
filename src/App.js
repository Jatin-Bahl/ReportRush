import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 15;
  apikey= process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div>
          <Router>
          <Navbar />
        <div className='container my-3'>
          <Routes>
            <Route exact path='/' element={<News apikey={this.apikey} key="general" pageSize={this.pageSize} country="in" category="general"/>} />
            <Route exact path='/business' element={<News apikey={this.apikey} key="business" pageSize={this.pageSize} country="in" category="business"/>} />
            <Route exact path='/entertainment' element={<News apikey={this.apikey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>} />
            <Route exact path='/general' element={<News apikey={this.apikey} key="general" pageSize={this.pageSize} country="in" category="general"/>} />
            <Route exact path='/health' element={<News key="health" pageSize={this.pageSize} country="in" category="health"/>} />
            <Route exact path='/science' element={<News apikey={this.apikey} key="science" pageSize={this.pageSize} country="in" category="science"/>} />
            <Route exact path='/sports' element={<News apikey={this.apikey} key="sports" pageSize={this.pageSize} country="in" category="sports"/>} />
            <Route exact path='/technology' element={<News apikey={this.apikey} key="technology" pageSize={this.pageSize} country="in" category="technology"/>} />
          </Routes>
        </div>
      </Router>
      </div>
    )
  }
}

