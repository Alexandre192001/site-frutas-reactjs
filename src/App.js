import React, {Fragment} from 'react'
import './App.css';

import HeaderPage from './components/header/header'
import FrutasPage from './components/frutas'
import FooterPage from './components/footer/footer'

function App() {
  return (
    <Fragment>
      <HeaderPage/>
      <FrutasPage/>
      <FooterPage/>
    </Fragment>
  )
}

export default App;
