import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Page1 from './modules/page1'
import Page2 from './modules/page2'
import Page3 from './modules/page2'
import ModuleTitle from './modules/moduletitle'

function App() {


  return (
    <>
  <ModuleTitle></ModuleTitle>

    <div class="scoll-container">
  
    <Page1></Page1>
   <Page2></Page2>
   <Page3></Page3>
  <footer class="scroll-item">Footer</footer>
</div>




    </>
  )
}

export default App
