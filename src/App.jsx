import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './functionalComponents/HomePage';
import ReducerPage from './reducer/ReducerPage';

function App() {
console.log("appppppp")
  return (
    <>
  <div  style={{backgroundColor:"grey", padding: "20px", width:'100vw', height:"100vh" }}>
    {/* <ClassBasedComponent/> */}
    <HomePage/>
    <ReducerPage/>
  </div>
    </>
  )
}

export default App
