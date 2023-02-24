import React from 'react'

import Nav from '../components/Nav'
import Main from '../components/Main'
import Schedule from '../components/Schedule'
import Info from '../components/Info'

const Home = () => {
  return (
    <div>
        <Nav />
        <Main />
        <Schedule />
        <Info />
    </div>
  )
}

export default Home