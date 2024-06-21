import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Page1 from './modules/page1'
import Page2 from './modules/page2'
import Page3 from './modules/page3'
import Page4 from './modules/page4'
import Page5 from './modules/page5'

import ModuleTitle from './modules/moduletitle'

function App() {


  return (
    <>

    <div className="scoll-container">
    <ModuleTitle></ModuleTitle>

    <Page1></Page1>
   <Page2></Page2>
   <Page3></Page3> 
   <Page4></Page4>
   <Page5></Page5>
  <footer className="scroll-item"><h1>Gracias por leer. 📘</h1> </footer>
</div>




    </>
  )
}

export default App
