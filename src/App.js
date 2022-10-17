import React, {Fragment} from 'react'
import './App.css';

import Menu from "./components/layout/menu"
import Header from "./components/layout/header"
import Main from './components/layout/main'
import SectionFrutas from './components/frutas'
import Footer from './components/layout/footer'

function App() {
  return (
    <Fragment>
      <Menu/>
      <Header/>
      <Main/>
      <SectionFrutas/>
      <Menu/>
      <Footer/>
    </Fragment>
  )
}

export default App;
