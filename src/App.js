// 5549b4223c5842d993e830a4d910b30c
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <>
        <NavBar/>
        <News pageSize={8} country={'in'} category={'sports'}/>
      </>
    )
  }
}

