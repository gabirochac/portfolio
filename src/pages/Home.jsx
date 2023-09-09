import React from 'react'
import Navbar from '../components/navbar.jsx';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className='Home'>
        <Navbar/>
        <div Id="text_home">
          <div Id="text_hello">
            <h1 Id="hello">Hello</h1>
            <h1 Id="virg">,</h1>
          </div>
          <div Id="text_name">
            <hr Id="line"/>
            <h1 Id="name">I'm Gabriele Rocha</h1>
          </div>
        </div>
    </div>
  )
}
